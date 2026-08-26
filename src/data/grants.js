export const grants = [
  {
    grantee: 'New York City Master Chorale Inc',
    displayName: 'New York City Master Chorale',
    logo: '/assets/grantees/nyc-master-chorale.png',
    url: 'https://www.nycmasterchorale.org/',
    focus: ['Performing Arts (Music)', 'School Outreach'],
  },
  {
    grantee: 'Asheville Community Theatre Inc',
    displayName: 'Asheville Community Theatre',
    logo: '/assets/grantees/asheville-community-theatre.png',
    url: 'https://ashevilletheatre.org/',
    focus: ['Performing Arts (Theater)'],
  },
  {
    grantee: 'Different Strokes Performing Arts Collective',
    displayName: 'Different Strokes! Performing Arts Collective',
    logo: '/assets/grantees/different-strokes.png',
    url: 'https://www.differentstrokespac.org/',
    focus: ['Performing Arts (Youth Arts & Education)'],
  },
  {
    grantee: 'Oregon Shakespeare Festival',
    displayName: 'Oregon Shakespeare Festival',
    logo: '/assets/grantees/oregon-shakespeare-festival.png',
    url: 'https://osfashland.org/',
    focus: ['Performing Arts (Theater)'],
  },
];

// Only the fiscal-year total is kept here, since it is the one figure the site
// publishes. Per-grantee amounts are intentionally not stored in the repo.
export const totalGranted = 47500;
