const fs = require('fs');
const path = require('path');

const eventsDir = path.join(__dirname, 'frontend', 'public', 'events');
const guidesDir = path.join(__dirname, 'frontend', 'public', 'guides');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}
ensureDir(eventsDir);
ensureDir(guidesDir);

// ---------------- GUIDES ARTWORK ----------------

// G1: Student Playbook
const studentPlaybookSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="g1Bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#021c38"/>
      <stop offset="50%" stop-color="#0b325e"/>
      <stop offset="100%" stop-color="#010e1f"/>
    </linearGradient>
    <filter id="g1Glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <rect width="800" height="450" fill="url(#g1Bg)"/>

  <!-- Phone Mockup with Check-In Pass -->
  <g transform="translate(400, 185)" filter="url(#g1Glow)">
    <!-- Smartphone frame -->
    <rect x="-65" y="-105" width="130" height="210" rx="20" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
    <rect x="-55" y="-85" width="110" height="170" rx="10" fill="#1e293b"/>
    <!-- Top speaker bar -->
    <rect x="-20" y="-98" width="40" height="5" rx="2" fill="#64748b"/>
    <!-- Event Ticket Pass inside screen -->
    <rect x="-45" y="-70" width="90" height="60" rx="8" fill="#0284c7"/>
    <text x="0" y="-45" font-family="'Inter', sans-serif" font-size="9" font-weight="700" fill="#ffffff" text-anchor="middle">STUDENT PASS</text>
    <text x="0" y="-30" font-family="'Inter', sans-serif" font-size="8" font-weight="600" fill="#e0f2fe" text-anchor="middle">CONFIRMED #042</text>
    <!-- QR Code Mockup -->
    <rect x="-25" y="0" width="50" height="50" rx="6" fill="#ffffff"/>
    <rect x="-18" y="7" width="14" height="14" fill="#0f172a"/>
    <rect x="4" y="7" width="14" height="14" fill="#0f172a"/>
    <rect x="-18" y="29" width="14" height="14" fill="#0f172a"/>
    <rect x="6" y="31" width="10" height="10" fill="#0f172a"/>
    <!-- Verified Badge Check -->
    <circle cx="0" cy="65" r="12" fill="#10b981"/>
    <polyline points="-5,65 -1,69 6,61" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
  </g>

  <!-- Category Badge -->
  <rect x="40" y="38" width="145" height="28" rx="14" fill="#0369a1" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="112" y="57" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">STUDENT GUIDE</text>

  <text x="400" y="335" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="-0.5">STUDENT EVENT PLAYBOOK</text>
  <text x="400" y="370" font-family="'Inter', sans-serif" font-size="15" font-weight="500" fill="#cbd5e1" text-anchor="middle">How to Discover, Register, Beat Capacity Caps &#38; Check-In</text>
  <rect x="290" y="395" width="220" height="30" rx="15" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="400" y="415" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#38bdf8" text-anchor="middle">5 Min Read &#8226; Registration &#38; Pass</text>
</svg>`;

// G2: Organizer Masterclass
const organizerMasterclassSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="g2Bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="50%" stop-color="#312e81"/>
      <stop offset="100%" stop-color="#0f0e2a"/>
    </linearGradient>
    <filter id="g2Glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <rect width="800" height="450" fill="url(#g2Bg)"/>

  <!-- Clipboard & Analytics Dashboard -->
  <g transform="translate(400, 185)" filter="url(#g2Glow)">
    <!-- Clipboard Frame -->
    <rect x="-80" y="-85" width="160" height="170" rx="14" fill="#1e293b" stroke="#818cf8" stroke-width="3"/>
    <!-- Top Clip -->
    <rect x="-30" y="-100" width="60" height="24" rx="6" fill="#4338ca" stroke="#c7d2fe" stroke-width="2"/>
    <circle cx="0" cy="-90" r="4" fill="#ffffff"/>
    <!-- Checklist items inside -->
    <g transform="translate(-60, -50)">
      <circle cx="10" cy="10" r="8" fill="#10b981"/>
      <polyline points="7,10 9,12 13,8" fill="none" stroke="#ffffff" stroke-width="2"/>
      <line x1="28" y1="10" x2="110" y2="10" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>

      <circle cx="10" cy="35" r="8" fill="#10b981"/>
      <polyline points="7,35 9,37 13,33" fill="none" stroke="#ffffff" stroke-width="2"/>
      <line x1="28" y1="35" x2="110" y2="35" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>

      <circle cx="10" cy="60" r="8" fill="#f59e0b"/>
      <line x1="7" y1="60" x2="13" y2="60" stroke="#ffffff" stroke-width="2"/>
      <line x1="28" y1="60" x2="90" y2="60" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round"/>

      <circle cx="10" cy="85" r="8" fill="#64748b"/>
      <line x1="28" y1="85" x2="70" y2="85" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  </g>

  <!-- Category Badge -->
  <rect x="40" y="38" width="160" height="28" rx="14" fill="#4338ca" stroke="#818cf8" stroke-width="1.5"/>
  <text x="120" y="57" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">ORGANIZER GUIDE</text>

  <text x="400" y="335" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="-0.5">EVENT ORGANIZER MASTERCLASS</text>
  <text x="400" y="370" font-family="'Inter', sans-serif" font-size="15" font-weight="500" fill="#cbd5e1" text-anchor="middle">Step-by-Step Blueprint for Hosting Seamless Campus Events</text>
  <rect x="290" y="395" width="220" height="30" rx="15" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="400" y="415" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#818cf8" text-anchor="middle">8 Min Read &#8226; Logistics &#38; Rosters</text>
</svg>`;

// G3: Hackathon Playbook
const hackathonPlaybookSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="g3Bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#022c22"/>
      <stop offset="50%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#01140e"/>
    </linearGradient>
    <filter id="g3Glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <rect width="800" height="450" fill="url(#g3Bg)"/>

  <!-- Laptop with Code & Terminal -->
  <g transform="translate(400, 185)" filter="url(#g3Glow)">
    <!-- Screen -->
    <rect x="-85" y="-65" width="170" height="110" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="3"/>
    <rect x="-75" y="-55" width="150" height="90" fill="#022c22"/>
    <!-- Terminal header dots -->
    <circle cx="-65" cy="-45" r="3" fill="#ef4444"/>
    <circle cx="-55" cy="-45" r="3" fill="#f59e0b"/>
    <circle cx="-45" cy="-45" r="3" fill="#10b981"/>
    <!-- Code prompt -->
    <text x="-65" y="-25" font-family="'Courier New', monospace" font-size="10" fill="#34d399">&gt; git commit -m &quot;feat: demo ready&quot;</text>
    <text x="-65" y="-8" font-family="'Courier New', monospace" font-size="10" fill="#38bdf8">&gt; docker compose up -d [OK]</text>
    <text x="-65" y="10" font-family="'Courier New', monospace" font-size="10" fill="#facc15">&gt; Pitch deck: 3m timer set</text>
    <!-- Base / Keyboard -->
    <polygon points="-105,45 105,45 125,65 -125,65" fill="#1e293b" stroke="#059669" stroke-width="2"/>
    <rect x="-25" y="50" width="50" height="8" rx="2" fill="#334155"/>
  </g>

  <!-- Category Badge -->
  <rect x="40" y="38" width="175" height="28" rx="14" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
  <text x="127" y="57" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">TECH &#38; HACKATHONS</text>

  <text x="400" y="335" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="-0.5">24-HOUR HACKATHON GUIDE</text>
  <text x="400" y="370" font-family="'Inter', sans-serif" font-size="15" font-weight="500" fill="#cbd5e1" text-anchor="middle">MVP Architecture, Git Teamwork &#38; 3-Minute Winning Demos</text>
  <rect x="290" y="395" width="220" height="30" rx="15" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="400" y="415" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#34d399" text-anchor="middle">6 Min Read &#8226; Architecture &#38; Pitch</text>
</svg>`;

// G4: Cultural & Stage Protocol
const culturalProtocolSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="g4Bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2a0845"/>
      <stop offset="50%" stop-color="#4a0e4e"/>
      <stop offset="100%" stop-color="#140224"/>
    </linearGradient>
    <filter id="g4Glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <rect width="800" height="450" fill="url(#g4Bg)"/>

  <!-- Stage Curtains & Microphone -->
  <g transform="translate(400, 180)" filter="url(#g4Glow)">
    <!-- Stage Spotlights -->
    <polygon points="-180,-100 -50,90 -220,90" fill="#ec4899" opacity="0.2"/>
    <polygon points="180,-100 220,90 50,90" fill="#8b5cf6" opacity="0.2"/>
    <!-- Studio Microphone on Stand -->
    <ellipse cx="0" cy="-35" rx="18" ry="26" fill="#1e293b" stroke="#e879f9" stroke-width="3"/>
    <rect x="-14" y="-35" width="28" height="2" fill="#cbd5e1"/>
    <rect x="-14" y="-25" width="28" height="2" fill="#cbd5e1"/>
    <!-- U-Mount -->
    <path d="M -26 -35 C -26 15 26 15 26 -35" fill="none" stroke="#f472b6" stroke-width="3.5"/>
    <line x1="0" y1="5" x2="0" y2="55" stroke="#cbd5e1" stroke-width="4"/>
    <!-- Stand Base -->
    <polygon points="0,55 -30,85 30,85" fill="#334155" stroke="#cbd5e1" stroke-width="2"/>
  </g>

  <!-- Category Badge -->
  <rect x="40" y="38" width="165" height="28" rx="14" fill="#581c87" stroke="#c084fc" stroke-width="1.5"/>
  <text x="122" y="57" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">CULTURAL &#38; ARTS</text>

  <text x="400" y="335" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="-0.5">STAGE &#38; AUDIO PROTOCOLS</text>
  <text x="400" y="370" font-family="'Inter', sans-serif" font-size="15" font-weight="500" fill="#cbd5e1" text-anchor="middle">Sound Checks, Backstage Etiquette &#38; Green Room Operations</text>
  <rect x="290" y="395" width="220" height="30" rx="15" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="400" y="415" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#c084fc" text-anchor="middle">7 Min Read &#8226; Sound &#38; Green Room</text>
</svg>`;

// G5: Sports Tournament Hosting
const sportsHostingSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="g5Bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="50%" stop-color="#047857"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
    <filter id="g5Glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <rect width="800" height="450" fill="url(#g5Bg)"/>

  <!-- Tournament Bracket & Trophy -->
  <g transform="translate(400, 180)" filter="url(#g5Glow)">
    <!-- Brackets left & right -->
    <g stroke="#6ee7b7" stroke-width="2.5" fill="none" opacity="0.6">
      <path d="M -160 -50 L -120 -50 L -120 -20 L -80 -20"/>
      <path d="M -160 10 L -120 10 L -120 -20"/>
      <path d="M 160 -50 L 120 -50 L 120 -20 L 80 -20"/>
      <path d="M 160 10 L 120 10 L 120 -20"/>
    </g>
    <!-- Golden Trophy Cup -->
    <path d="M -30 -50 L 30 -50 L 25 5 C 20 25 -20 25 -25 5 Z" fill="#facc15" stroke="#fef08a" stroke-width="2.5"/>
    <!-- Trophy Handles -->
    <path d="M -30 -40 C -50 -40 -50 -10 -25 -5" fill="none" stroke="#facc15" stroke-width="3"/>
    <path d="M 30 -40 C 50 -40 50 -10 25 -5" fill="none" stroke="#facc15" stroke-width="3"/>
    <!-- Stem & Base -->
    <rect x="-8" y="20" width="16" height="25" fill="#d97706"/>
    <polygon points="-35,70 35,70 25,45 -25,45" fill="#1e293b" stroke="#facc15" stroke-width="2"/>
    <rect x="-18" y="52" width="36" height="10" fill="#facc15"/>
  </g>

  <!-- Category Badge -->
  <rect x="40" y="38" width="175" height="28" rx="14" fill="#047857" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="127" y="57" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">SPORTS &#38; ATHLETICS</text>

  <text x="400" y="335" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="-0.5">SPORTS TOURNAMENT HOSTING</text>
  <text x="400" y="370" font-family="'Inter', sans-serif" font-size="15" font-weight="500" fill="#cbd5e1" text-anchor="middle">Knockout Brackets, Referee Certifications &#38; Medical Protocols</text>
  <rect x="290" y="395" width="220" height="30" rx="15" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="400" y="415" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#34d399" text-anchor="middle">5 Min Read &#8226; FIBA Rules &#38; Brackets</text>
</svg>`;

// G6: Sponsorship & Budgeting
const sponsorshipBudgetSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="g6Bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e3a8a"/>
      <stop offset="50%" stop-color="#1d4ed8"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <filter id="g6Glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <rect width="800" height="450" fill="url(#g6Bg)"/>

  <!-- Sponsorship Deck & Growth Chart -->
  <g transform="translate(400, 180)" filter="url(#g6Glow)">
    <!-- Pitch Deck Document -->
    <rect x="-65" y="-80" width="130" height="150" rx="10" fill="#0f172a" stroke="#60a5fa" stroke-width="3"/>
    <!-- Folded corner -->
    <polygon points="40,-80 65,-55 40,-55" fill="#3b82f6"/>
    <!-- Title bar -->
    <rect x="-45" y="-60" width="65" height="10" rx="3" fill="#facc15"/>
    <!-- Ascending growth bar chart -->
    <rect x="-45" y="10" width="14" height="35" rx="3" fill="#38bdf8"/>
    <rect x="-25" y="-5" width="14" height="50" rx="3" fill="#60a5fa"/>
    <rect x="-5" y="-20" width="14" height="65" rx="3" fill="#818cf8"/>
    <rect x="15" y="-35" width="14" height="80" rx="3" fill="#10b981"/>
    <!-- Upward Trend Line -->
    <path d="M -45 10 L -18 -8 L 2 -23 L 22 -38" fill="none" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
    <circle cx="22" cy="-38" r="4" fill="#facc15"/>
  </g>

  <!-- Category Badge -->
  <rect x="40" y="38" width="175" height="28" rx="14" fill="#1e3a8a" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="127" y="57" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">FINANCE &#38; SPONSORS</text>

  <text x="400" y="335" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="-0.5">SPONSORSHIP &#38; BUDGETING</text>
  <text x="400" y="370" font-family="'Inter', sans-serif" font-size="15" font-weight="500" fill="#cbd5e1" text-anchor="middle">Drafting Winning Pitch Decks &#38; Pitching to Corporate Brands</text>
  <rect x="290" y="395" width="220" height="30" rx="15" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="400" y="415" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#93c5fd" text-anchor="middle">6 Min Read &#8226; Pitch Decks &#38; Tiering</text>
</svg>`;

// Write Guides SVGs
fs.writeFileSync(path.join(guidesDir, 'student-playbook.svg'), studentPlaybookSvg);
fs.writeFileSync(path.join(guidesDir, 'organizer-masterclass.svg'), organizerMasterclassSvg);
fs.writeFileSync(path.join(guidesDir, 'hackathon-guide.svg'), hackathonPlaybookSvg);
fs.writeFileSync(path.join(guidesDir, 'cultural-protocol.svg'), culturalProtocolSvg);
fs.writeFileSync(path.join(guidesDir, 'sports-hosting.svg'), sportsHostingSvg);
fs.writeFileSync(path.join(guidesDir, 'sponsorship-budget.svg'), sponsorshipBudgetSvg);
console.log('Successfully written and validated 6 Guide SVGs in /public/guides');

// ---------------- EVENTS ARTWORK ----------------

// 1. RoboWars
const robowarsSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050816"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#020617"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect width="800" height="450" fill="url(#bg)"/>

  <g opacity="0.12" stroke="#38bdf8" stroke-width="1">
    <line x1="0" y1="90" x2="800" y2="90"/>
    <line x1="0" y1="180" x2="800" y2="180"/>
    <line x1="0" y1="270" x2="800" y2="270"/>
    <line x1="0" y1="360" x2="800" y2="360"/>
    <line x1="160" y1="0" x2="160" y2="450"/>
    <line x1="320" y1="0" x2="320" y2="450"/>
    <line x1="480" y1="0" x2="480" y2="450"/>
    <line x1="640" y1="0" x2="640" y2="450"/>
  </g>

  <polygon points="400,90 480,140 480,240 400,290 320,240 320,140" fill="#1e293b" stroke="#06b6d4" stroke-width="3" opacity="0.6"/>
  <polygon points="400,110 460,150 460,230 400,270 340,230 340,150" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" opacity="0.8"/>

  <g transform="translate(260, 150)">
    <rect x="0" y="30" width="80" height="50" rx="8" fill="#1e293b" stroke="#06b6d4" stroke-width="3"/>
    <rect x="10" y="42" width="60" height="12" rx="4" fill="#06b6d4" filter="url(#glow)"/>
    <rect x="-10" y="20" width="20" height="70" rx="5" fill="#334155" stroke="#0284c7" stroke-width="2"/>
    <rect x="70" y="20" width="20" height="70" rx="5" fill="#334155" stroke="#0284c7" stroke-width="2"/>
    <circle cx="40" cy="10" r="18" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
    <path d="M 40 -2 L 40 22 M 28 10 L 52 10" stroke="#38bdf8" stroke-width="2"/>
  </g>

  <g transform="translate(400, 190)" filter="url(#glow)">
    <polygon points="0,-25 6,-6 25,0 6,6 0,25 -6,6 -25,0 -6,-6" fill="#facc15"/>
    <polygon points="0,-12 3,-3 12,0 3,3 0,12 -3,3 -12,0 -3,-3" fill="#ffffff"/>
  </g>

  <g transform="translate(460, 150)">
    <polygon points="0,75 70,55 50,20 10,25" fill="#1e293b" stroke="#ef4444" stroke-width="3"/>
    <circle cx="35" cy="45" r="8" fill="#ef4444" filter="url(#glow)"/>
    <polygon points="-15,75 5,55 -5,40" fill="#f59e0b" stroke="#f97316" stroke-width="2"/>
    <rect x="65" y="30" width="18" height="50" rx="5" fill="#334155" stroke="#ef4444" stroke-width="2"/>
  </g>

  <rect x="40" y="38" width="130" height="28" rx="14" fill="#083344" stroke="#06b6d4" stroke-width="1.5"/>
  <text x="105" y="57" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#38bdf8" text-anchor="middle" letter-spacing="1.5">TECHNICAL</text>

  <text x="400" y="340" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="-0.5">ROBOWARS 2026</text>
  <text x="400" y="375" font-family="'Inter', sans-serif" font-size="15" font-weight="500" fill="#94a3b8" text-anchor="middle">Combat &#38; Autonomous Robotics Championship</text>
  <rect x="300" y="400" width="200" height="30" rx="15" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="400" y="420" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#38bdf8" text-anchor="middle">Arena Knockouts &#8226; Live Telemetry</text>
</svg>`;

// 2. Battle of Bands
const battleOfBandsSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bandBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18042b"/>
      <stop offset="50%" stop-color="#0f0728"/>
      <stop offset="100%" stop-color="#030014"/>
    </linearGradient>
    <linearGradient id="guitarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ec4899"/>
      <stop offset="50%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <filter id="purpleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="10" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect width="800" height="450" fill="url(#bandBg)"/>

  <polygon points="100,-20 280,380 40,380" fill="#d946ef" opacity="0.12"/>
  <polygon points="700,-20 760,380 520,380" fill="#8b5cf6" opacity="0.12"/>
  <polygon points="400,-20 540,380 260,380" fill="#3b82f6" opacity="0.10"/>

  <g transform="translate(400, 195) rotate(-28)" filter="url(#purpleGlow)">
    <path d="M -45 50 C -75 20 -75 -40 -35 -70 C -10 -50 10 -50 35 -70 C 75 -40 75 20 45 50 C 25 75 -25 75 -45 50 Z" fill="url(#guitarGrad)" stroke="#f472b6" stroke-width="3"/>
    <path d="M -20 20 C -40 0 -40 -30 -15 -45 C 5 -30 20 -20 20 10 Z" fill="#0f172a" opacity="0.6"/>
    <rect x="-18" y="-30" width="36" height="10" rx="3" fill="#1e293b" stroke="#e2e8f0" stroke-width="1.5"/>
    <rect x="-18" y="-10" width="36" height="10" rx="3" fill="#1e293b" stroke="#e2e8f0" stroke-width="1.5"/>
    <rect x="-8" y="-190" width="16" height="125" fill="#334155" stroke="#94a3b8" stroke-width="1.5"/>
    <polygon points="-12,-190 12,-190 16,-235 -6,-240" fill="#8b5cf6" stroke="#f472b6" stroke-width="2"/>
    <line x1="-4" y1="-230" x2="-4" y2="40" stroke="#f8fafc" stroke-width="1" opacity="0.8"/>
    <line x1="0" y1="-230" x2="0" y2="40" stroke="#f8fafc" stroke-width="1" opacity="0.8"/>
    <line x1="4" y1="-230" x2="4" y2="40" stroke="#f8fafc" stroke-width="1" opacity="0.8"/>
  </g>

  <rect x="40" y="38" width="130" height="28" rx="14" fill="#3b0764" stroke="#a855f7" stroke-width="1.5"/>
  <text x="105" y="57" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#e9d5ff" text-anchor="middle" letter-spacing="1.5">CULTURAL</text>

  <text x="400" y="340" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="-0.5">BATTLE OF THE BANDS</text>
  <text x="400" y="375" font-family="'Inter', sans-serif" font-size="15" font-weight="500" fill="#cbd5e1" text-anchor="middle">Inter-College Live Rock &#38; Fusion Face-Off</text>
  <rect x="290" y="400" width="220" height="30" rx="15" fill="#0f172a" stroke="#475569" stroke-width="1"/>
  <text x="400" y="420" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#c084fc" text-anchor="middle">Acoustic Bowl &#8226; Original Tracks</text>
</svg>`;

// 3. Chess Olympiad
const chessOlympiadSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="chessBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a1128"/>
      <stop offset="50%" stop-color="#0b1b3d"/>
      <stop offset="100%" stop-color="#030712"/>
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect width="800" height="450" fill="url(#chessBg)"/>

  <g transform="translate(320, 125)" filter="url(#goldGlow)">
    <path d="M 0 110 L 50 110 L 45 95 C 40 85 45 75 40 60 C 35 45 25 35 30 15 C 20 20 15 30 5 35 C 0 35 -15 25 -25 35 C -35 45 -25 65 -20 80 L -25 95 L -25 110 Z" fill="url(#gold)" stroke="#fef08a" stroke-width="2"/>
    <circle cx="5" cy="45" r="4" fill="#78350f"/>
    <rect x="-30" y="110" width="85" height="18" rx="4" fill="#b45309" stroke="#fde68a" stroke-width="1.5"/>
  </g>

  <g transform="translate(460, 105)">
    <path d="M 0 -25 L 0 0 M -12 -12 L 12 -12" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
    <circle cx="0" cy="12" r="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
    <path d="M -25 35 C -30 65 -35 100 -40 130 L 40 130 C 35 100 30 65 25 35 Z" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
    <rect x="-48" y="130" width="96" height="18" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  </g>

  <rect x="40" y="38" width="120" height="28" rx="14" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
  <text x="100" y="57" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#a7f3d0" text-anchor="middle" letter-spacing="1.5">SPORTS</text>

  <text x="400" y="335" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="-0.5">GRANDMASTER BLITZ</text>
  <text x="400" y="370" font-family="'Inter', sans-serif" font-size="15" font-weight="500" fill="#cbd5e1" text-anchor="middle">Inter-College Rapid Chess Olympiad</text>
  <rect x="290" y="395" width="220" height="30" rx="15" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="400" y="415" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#fbbf24" text-anchor="middle">FIDE Arbiters &#8226; Digital Clocks</text>
</svg>`;

// 4. Web3 Security
const web3Svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="web3Bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020d1c"/>
      <stop offset="50%" stop-color="#071b38"/>
      <stop offset="100%" stop-color="#020814"/>
    </linearGradient>
    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
    <filter id="cyanNeon" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect width="800" height="450" fill="url(#web3Bg)"/>

  <g transform="translate(400, 185)" filter="url(#cyanNeon)">
    <path d="M 0 -85 L 65 -50 C 65 30 0 90 0 90 C 0 90 -65 30 -65 -50 Z" fill="url(#shieldGrad)" stroke="#a5f3fc" stroke-width="3"/>
    <rect x="-22" y="-10" width="44" height="35" rx="6" fill="#0f172a" stroke="#ffffff" stroke-width="2"/>
    <path d="M -12 -10 L -12 -25 C -12 -38 12 -38 12 -25 L 12 -10" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="0" cy="5" r="4" fill="#38bdf8"/>
    <line x1="0" y1="9" x2="0" y2="18" stroke="#38bdf8" stroke-width="2"/>
  </g>

  <rect x="40" y="38" width="130" height="28" rx="14" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
  <text x="105" y="57" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#c7d2fe" text-anchor="middle" letter-spacing="1.5">TECHNICAL</text>

  <text x="400" y="335" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="-0.5">WEB3 &#38; SMART CONTRACT SECURITY</text>
  <text x="400" y="370" font-family="'Inter', sans-serif" font-size="15" font-weight="500" fill="#cbd5e1" text-anchor="middle">Hands-On EVM Auditing &#38; DeFi Exploits</text>
  <rect x="290" y="395" width="220" height="30" rx="15" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="400" y="415" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#38bdf8" text-anchor="middle">Hardhat &#8226; CTF Challenges &#8226; Web3</text>
</svg>`;

// 5. Badminton Open
const badmintonSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="badmintonBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#022c22"/>
      <stop offset="50%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#021a14"/>
    </linearGradient>
    <filter id="smashGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect width="800" height="450" fill="url(#badmintonBg)"/>

  <g transform="translate(420, 200) rotate(42)" filter="url(#smashGlow)">
    <path d="M 0 35 C -12 35 -16 20 -16 10 C -16 0 16 0 16 10 C 16 20 12 35 0 35 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
    <line x1="-15" y1="18" x2="15" y2="18" stroke="#ef4444" stroke-width="2"/>
    <polygon points="-14,0 -38,-55 38,-55 14,0" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <line x1="-10" y1="0" x2="-28" y2="-55" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="-3" y1="0" x2="-10" y2="-55" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="3" y1="0" x2="10" y2="-55" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="10" y1="0" x2="28" y2="-55" stroke="#94a3b8" stroke-width="1.5"/>
  </g>

  <rect x="40" y="38" width="120" height="28" rx="14" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
  <text x="100" y="57" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#a7f3d0" text-anchor="middle" letter-spacing="1.5">SPORTS</text>

  <text x="400" y="335" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="-0.5">CAMPUS BADMINTON OPEN</text>
  <text x="400" y="370" font-family="'Inter', sans-serif" font-size="15" font-weight="500" fill="#cbd5e1" text-anchor="middle">Singles &#38; Doubles Championship Smash League</text>
  <rect x="290" y="395" width="220" height="30" rx="15" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="400" y="415" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#34d399" text-anchor="middle">Yonex Synthetic Courts &#8226; Knockout</text>
</svg>`;

// 6. Model UN
const modelUnSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="munBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a192f"/>
      <stop offset="50%" stop-color="#172a45"/>
      <stop offset="100%" stop-color="#020c1b"/>
    </linearGradient>
    <filter id="unBlueGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect width="800" height="450" fill="url(#munBg)"/>

  <g transform="translate(400, 180)" filter="url(#unBlueGlow)">
    <circle cx="0" cy="0" r="75" fill="#0b1b38" stroke="#38bdf8" stroke-width="2.5"/>
    <ellipse cx="0" cy="0" rx="75" ry="32" fill="none" stroke="#0284c7" stroke-width="1.5"/>
    <ellipse cx="0" cy="0" rx="75" ry="58" fill="none" stroke="#0284c7" stroke-width="1.5"/>
    <ellipse cx="0" cy="0" rx="32" ry="75" fill="none" stroke="#0284c7" stroke-width="1.5"/>
    <ellipse cx="0" cy="0" rx="58" ry="75" fill="none" stroke="#0284c7" stroke-width="1.5"/>
    <line x1="-75" y1="0" x2="75" y2="0" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="0" y1="-75" x2="0" y2="75" stroke="#38bdf8" stroke-width="1.5"/>

    <path d="M -75 40 C -115 10 -105 -50 -55 -85" fill="none" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
    <circle cx="-85" cy="20" r="5" fill="#facc15"/>
    <circle cx="-100" cy="-10" r="5" fill="#facc15"/>
    <path d="M 75 40 C 115 10 105 -50 55 -85" fill="none" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
    <circle cx="85" cy="20" r="5" fill="#facc15"/>
    <circle cx="100" cy="-10" r="5" fill="#facc15"/>
  </g>

  <rect x="40" y="38" width="130" height="28" rx="14" fill="#1e3a8a" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="105" y="57" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#bfdbfe" text-anchor="middle" letter-spacing="1.5">ACADEMIC</text>

  <text x="400" y="335" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="-0.5">NATIONAL MODEL UNITED NATIONS</text>
  <text x="400" y="370" font-family="'Inter', sans-serif" font-size="15" font-weight="500" fill="#cbd5e1" text-anchor="middle">Parliamentary Debate &#38; Global Diplomacy Summit</text>
  <rect x="290" y="395" width="220" height="30" rx="15" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="400" y="415" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#60a5fa" text-anchor="middle">UNSC &#8226; General Assembly &#8226; Caucuses</text>
</svg>`;

// 7. Photography
const photoFilmSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="photoBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e102a"/>
      <stop offset="50%" stop-color="#2d1338"/>
      <stop offset="100%" stop-color="#0d0414"/>
    </linearGradient>
    <filter id="photoGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect width="800" height="450" fill="url(#photoBg)"/>

  <g transform="translate(400, 185)" filter="url(#photoGlow)">
    <rect x="-85" y="-55" width="170" height="110" rx="16" fill="#1e293b" stroke="#e879f9" stroke-width="3"/>
    <circle cx="0" cy="5" r="48" fill="#0f172a" stroke="#d946ef" stroke-width="4"/>
    <circle cx="0" cy="5" r="38" fill="#18181b" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="0" cy="5" r="24" fill="#0284c7" opacity="0.6"/>
  </g>

  <rect x="40" y="38" width="130" height="28" rx="14" fill="#4c0519" stroke="#fb7185" stroke-width="1.5"/>
  <text x="105" y="57" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#fecdd3" text-anchor="middle" letter-spacing="1.5">CULTURAL</text>

  <text x="400" y="335" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="-0.5">CAMPUS PHOTOGRAPHY &#38; FILM</text>
  <text x="400" y="370" font-family="'Inter', sans-serif" font-size="15" font-weight="500" fill="#cbd5e1" text-anchor="middle">Short Film Screenings &#38; Visual Arts Gallery</text>
  <rect x="290" y="395" width="220" height="30" rx="15" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="400" y="415" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#f43f5e" text-anchor="middle">Cinema Lounge &#8226; Jury Showcase</text>
</svg>`;

// 8. Research Colloquium
const researchSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="researchBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c1222"/>
      <stop offset="50%" stop-color="#141f36"/>
      <stop offset="100%" stop-color="#040814"/>
    </linearGradient>
    <filter id="academicGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="7" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <rect width="800" height="450" fill="url(#researchBg)"/>

  <g transform="translate(400, 175)" filter="url(#academicGlow)">
    <polygon points="0,-60 85,-30 0,0 -85,-30" fill="#1e3a8a" stroke="#60a5fa" stroke-width="3"/>
    <path d="M -40 -15 L -40 10 C -40 25 40 25 40 10 L 40 -15" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
    <circle cx="0" cy="-30" r="5" fill="#facc15"/>
    <path d="M 0 -30 Q 30 -25 55 5" fill="none" stroke="#facc15" stroke-width="3"/>
    <rect x="52" y="5" width="8" height="15" rx="2" fill="#f59e0b"/>
  </g>

  <rect x="40" y="38" width="130" height="28" rx="14" fill="#1e3a8a" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="105" y="57" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#bfdbfe" text-anchor="middle" letter-spacing="1.5">ACADEMIC</text>

  <text x="400" y="335" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="-0.5">RESEARCH &#38; PAPER COLLOQUIUM</text>
  <text x="400" y="370" font-family="'Inter', sans-serif" font-size="15" font-weight="500" fill="#cbd5e1" text-anchor="middle">LaTeX, IEEE Standards &#38; Peer-Review Publishing</text>
  <rect x="290" y="395" width="220" height="30" rx="15" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="400" y="415" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#60a5fa" text-anchor="middle">Auditorium &#8226; Faculty Mentorship</text>
</svg>`;

// Write Events SVGs
fs.writeFileSync(path.join(eventsDir, 'robowars.svg'), robowarsSvg);
fs.writeFileSync(path.join(eventsDir, 'battle-of-bands.svg'), battleOfBandsSvg);
fs.writeFileSync(path.join(eventsDir, 'chess-olympiad.svg'), chessOlympiadSvg);
fs.writeFileSync(path.join(eventsDir, 'web3-security.svg'), web3Svg);
fs.writeFileSync(path.join(eventsDir, 'badminton-open.svg'), badmintonSvg);
fs.writeFileSync(path.join(eventsDir, 'model-un.svg'), modelUnSvg);
fs.writeFileSync(path.join(eventsDir, 'photography.svg'), photoFilmSvg);
fs.writeFileSync(path.join(eventsDir, 'research-colloquium.svg'), researchSvg);
console.log('Successfully written and validated 8 Event SVGs in /public/events');
