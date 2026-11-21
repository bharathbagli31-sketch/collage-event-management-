const path = require('path');
const { PrismaClient, EventStatus, Role } = require(
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
  console.log('Upserting Destination & Gala events into MySQL...');
  
  // 1. Fetch categories
  let categories = await prisma.category.findMany();
  let catMap = {};
  for (const c of categories) {
    catMap[c.name] = c.id;
  }

  // If Cultural or Academic or Special exists
  const culturalCatId = catMap['Cultural'] || categories[0]?.id;
  const technicalCatId = catMap['Technical'] || categories[0]?.id;

  // 2. Fetch an organizer
  const organizers = await prisma.user.findMany({ where: { role: Role.ORGANIZER } });
  const orgId = organizers[0]?.id || 1;

  const destinationEvents = [
    {
      title: 'Grand Starlight Banquet & Gala Celebration',
      description:
        'An extraordinary black-tie evening beneath the illuminated 40-foot cathedral glass marquee. Featuring an exquisite 7-course seasonal tasting menu by our master culinary brigade, vintage Champagne toast, live harp and classical string quartet, and starlit dancing on the central garden lawns.',
      categoryId: culturalCatId,
      date: futureDate(5),
      time: '07:00 PM - 11:30 PM',
      venue: 'The Starlight Glass Marquee, Central Gardens',
      capacity: 350,
      status: EventStatus.PUBLISHED,
      imageUrl: '/images/front-page.jpg',
      organizerId: orgId,
    },
    {
      title: 'Aura Sunset Jazz, Oysters & Mixology Soirée',
      description:
        'Experience sunset over crashing ocean waves on our cantilevered terrace. Live seaside jazz saxophone accompanies freshly shucked Pacific oysters, Brittany lobster crudo, and craft botanical cocktails crafted by our resident mixologists.',
      categoryId: culturalCatId,
      date: futureDate(8),
      time: '05:30 PM - 09:30 PM',
      venue: 'Azure Cliffside Lounge & Raw Bar, Sunset Cliffs Overlook',
      capacity: 120,
      status: EventStatus.PUBLISHED,
      imageUrl: '/restaurants/azure-cliffside.svg',
      organizerId: orgId,
    },
    {
      title: 'Subterranean Grand Cru Sommelier Wine Tasting',
      description:
        'Descend into our 19th-century limestone cellar vaults for a guided vertical flight of vintage Barolo, Tuscan reserves, and aged Napa Valley Cabernets. Paired with aged 36-month Parmigiano-Reggiano, artisanal honeys, and freshly extruded black truffle tagliolini.',
      categoryId: culturalCatId,
      date: futureDate(11),
      time: '04:00 PM - 06:30 PM',
      venue: 'Heritage Stone Courtyard & Cellar',
      capacity: 40,
      status: EventStatus.PUBLISHED,
      imageUrl: '/restaurants/rustic-cellar.svg',
      organizerId: orgId,
    },
    {
      title: 'Moonlit Beach Fire & Acoustic Guitar Night',
      description:
        'Barefoot luxury on soft dunes at Oasis Beach Club. Gather around roaring stone fire pits for flame-seared seafood, craft cocktails, gourmet artisan s’mores, and live acoustic guitar under starry night skies.',
      categoryId: culturalCatId,
      date: futureDate(14),
      time: '08:00 PM - 11:30 PM',
      venue: 'South Beachfront & Coastal Dunes',
      capacity: 150,
      status: EventStatus.PUBLISHED,
      imageUrl: '/restaurants/oasis-beach-club.svg',
      organizerId: orgId,
    },
    {
      title: 'Lantern Floating Ceremony & Midnight Water Symphony',
      description:
        'A magical evening across Bamboo Lake and the Lotus Promenade. Guests release personalized glowing silk water lanterns across the tranquil koi lake accompanied by an enchanting synchronized water light show and ceremonial matcha.',
      categoryId: culturalCatId,
      date: futureDate(18),
      time: '07:30 PM - 10:00 PM',
      venue: 'Bamboo Lake Gardens & Lotus Promenade',
      capacity: 250,
      status: EventStatus.PUBLISHED,
      imageUrl: '/restaurants/silk-spice.svg',
      organizerId: orgId,
    },
  ];

  for (const ev of destinationEvents) {
    const existing = await prisma.event.findFirst({
      where: { title: ev.title },
    });
    if (!existing) {
      await prisma.event.create({ data: ev });
      console.log(`Created destination event: ${ev.title}`);
    } else {
      await prisma.event.update({
        where: { id: existing.id },
        data: {
          imageUrl: ev.imageUrl,
          venue: ev.venue,
          status: EventStatus.PUBLISHED,
          description: ev.description,
          time: ev.time,
        },
      });
      console.log(`Updated destination event: ${ev.title}`);
    }
  }

  const count = await prisma.event.count({ where: { status: EventStatus.PUBLISHED } });
  console.log(`Total published events in MySQL: ${count}`);
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
