const path = require('path');
const { PrismaClient, EventStatus, Role, RegistrationStatus } = require(
  path.join(__dirname, 'backend', 'node_modules', '@prisma/client')
);

const prisma = new PrismaClient();

function futureDate(daysFromNow) {
  const d = new Date();
  d.setUTCHours(0, 0, 0, 0);
  d.setUTCDate(d.getUTCDate() + daysFromNow);
  return d;
}

async function main() {
  console.log('Inserting new college events and updating existing images in MySQL...');

  // 1. Fetch categories
  const categories = await prisma.category.findMany();
  const catMap = {};
  for (const c of categories) {
    catMap[c.name] = c.id;
  }

  // 2. Fetch organizers
  const organizers = await prisma.user.findMany({ where: { role: Role.ORGANIZER } });
  const org1 = organizers[0]?.id || 1;
  const org2 = organizers[1]?.id || org1;

  // 3. Update events 6 and 7 images
  const ev6 = await prisma.event.findFirst({ where: { title: { contains: 'Photography' } } });
  if (ev6) {
    await prisma.event.update({
      where: { id: ev6.id },
      data: { imageUrl: '/events/photography.svg', status: EventStatus.PUBLISHED },
    });
    console.log('Updated Event 6 with /events/photography.svg and PUBLISHED status');
  }

  const ev7 = await prisma.event.findFirst({ where: { title: { contains: 'Research Methodology' } } });
  if (ev7) {
    await prisma.event.update({
      where: { id: ev7.id },
      data: { imageUrl: '/events/research-colloquium.svg' },
    });
    console.log('Updated Event 7 with /events/research-colloquium.svg');
  }

  // 4. List of new events to upsert
  const newEvents = [
    {
      title: 'RoboWars 2026: Combat & Autonomous Robotics Championship',
      description:
        'Battle-ready combat bots and autonomous obstacle-navigating rovers clash in our university arena. Student engineering teams compete in weight-class brackets, wireless frequency calibration, and pit repairs with safety cages and high-torque electric drives.',
      categoryId: catMap['Technical'],
      date: futureDate(12),
      time: '10:00 AM - 05:00 PM',
      venue: 'Mechanical Engineering Hangar & Arena',
      capacity: 100,
      status: EventStatus.PUBLISHED,
      organizerId: org1,
      imageUrl: '/events/robowars.svg',
    },
    {
      title: 'Battle of the Bands: Inter-College Live Music Face-Off',
      description:
        'Electric guitars, blazing drum solos, and original indie rock, jazz fusion, and metal compositions take center stage. College bands will be judged on original riffs, stage charisma, technical synchronization, and crowd engagement.',
      categoryId: catMap['Cultural'],
      date: futureDate(18),
      time: '06:00 PM - 10:30 PM',
      venue: 'Open Air Amphitheatre & Acoustic Bowl',
      capacity: 300,
      status: EventStatus.PUBLISHED,
      organizerId: org2,
      imageUrl: '/events/battle-of-bands.svg',
    },
    {
      title: 'Grandmaster Blitz: Inter-College Chess Olympiad',
      description:
        'Rapid and blitz chess tournament with digital clocks, FIDE certified arbiters, and live electronic board projections. Featuring open and women’s brackets, tactical puzzle rush sprints, and trophy honors for the top college tacticians.',
      categoryId: catMap['Sports'],
      date: futureDate(8),
      time: '09:30 AM - 04:30 PM',
      venue: 'Student Activities Center — Chess Lounge',
      capacity: 50,
      status: EventStatus.PUBLISHED,
      organizerId: org2,
      imageUrl: '/events/chess-olympiad.svg',
    },
    {
      title: 'Web3 & Smart Contract Security Bootcamp',
      description:
        'Deep-dive into Ethereum virtual machine (EVM) fundamentals, Solidity reentrancy vulnerability auditing, decentralized finance (DeFi) primitives, and zero-knowledge proofs. Hands-on coding with local Hardhat testnets and capture-the-flag challenges.',
      categoryId: catMap['Technical'],
      date: futureDate(15),
      time: '02:00 PM - 06:00 PM',
      venue: 'Cyber Security Lab 201 — CSE Wing',
      capacity: 45,
      status: EventStatus.PUBLISHED,
      organizerId: org1,
      imageUrl: '/events/web3-security.svg',
    },
    {
      title: 'Campus Badminton Open & Smash Championship',
      description:
        'Fast-paced indoor badminton showdown featuring Men’s Singles, Women’s Singles, and Mixed Doubles. Synthetic Yonex court mats, professional line judging, feather shuttles, and knockout tournament brackets.',
      categoryId: catMap['Sports'],
      date: futureDate(21),
      time: '08:00 AM - 02:00 PM',
      venue: 'Indoor Sports Pavilion — Badminton Arena',
      capacity: 64,
      status: EventStatus.PUBLISHED,
      organizerId: org2,
      imageUrl: '/events/badminton-open.svg',
    },
    {
      title: 'National Model United Nations (NMUN) & Parliamentary Debate',
      description:
        'Three days of intense diplomatic crisis simulation, resolution drafting, and spirited committee caucus debate. Delegates represent sovereign nations in the UN Security Council, General Assembly, and Human Rights Council.',
      categoryId: catMap['Academic'],
      date: futureDate(25),
      time: '09:00 AM - 05:30 PM',
      venue: 'Senate Chambers & International Relations Hall',
      capacity: 120,
      status: EventStatus.PUBLISHED,
      organizerId: org1,
      imageUrl: '/events/model-un.svg',
    },
  ];

  for (const ev of newEvents) {
    const existing = await prisma.event.findFirst({ where: { title: ev.title } });
    if (!existing) {
      const created = await prisma.event.create({ data: ev });
      console.log(`Created new event: "${created.title}" (ID: ${created.id})`);
    } else {
      await prisma.event.update({
        where: { id: existing.id },
        data: {
          imageUrl: ev.imageUrl,
          description: ev.description,
          status: EventStatus.PUBLISHED,
          capacity: ev.capacity,
          venue: ev.venue,
        },
      });
      console.log(`Updated existing event: "${existing.title}"`);
    }
  }

  // 5. Seed some registrations for the new events
  const students = await prisma.user.findMany({ where: { role: Role.STUDENT } });
  const allEvents = await prisma.event.findMany({ where: { status: EventStatus.PUBLISHED } });

  for (const ev of allEvents) {
    const regCount = await prisma.registration.count({ where: { eventId: ev.id } });
    if (regCount === 0 && students.length > 0) {
      // Register 1-2 students for testing
      for (let i = 0; i < Math.min(2, students.length); i++) {
        await prisma.registration.create({
          data: {
            studentId: students[i].id,
            eventId: ev.id,
            status: RegistrationStatus.REGISTERED,
          },
        }).catch(() => {});
      }
    }
  }

  const total = await prisma.event.count();
  console.log(`All done! Total events in database now: ${total}`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
