
import { ExperienceItem, TimelineEntry } from './types';

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Featured', href: '#featured' },
  { label: 'Works & Recognition', href: '#works-awards' },
  { label: 'Contact', href: '#contact' },
];

export const BIO_PARAGRAPHS = [
  "Kin Kong Lam (KK) is a playwright and drama educator dedicated to \"writing regarding real stories.\" currently working as a game story developer and freelance drama creator.",
  "He holds a Master of Drama Education from the Hong Kong Academy for Performing Arts (Thesis: \"Using Process Drama to Inspire Senior Secondary Students to Reflect on Value Judgments\"). He also obtained a Bachelor of Education (Honours) in Sociology and Liberal Studies Teaching, with a minor in History, from Hong Kong Baptist University.",
  "Bridging the gap between arts and technology, KK also holds a Bachelor’s degree in Information Technology from Western Governors University, USA."
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: "2022 - 2024",
    company: "Digital Extremes Ltd.",
    title: "Game Script Translation & Community Development"
  },
  {
    year: "2017 - 2021",
    company: "The Boys' & Girls' Clubs Association of Hong Kong (Community Creative Learning Centre)",
    title: "Assistant Program Officer & Drama Education Project Design"
  },
  {
    year: "2016 - 2017",
    company: "Beacon College",
    title: "Teacher"
  },
  {
    year: "2014 - 2016",
    company: "Hong Kong Baptist University",
    title: "Student Researcher"
  }
];

// Featured Work: The Wishing Stone
export const WISHING_STONE_IMAGES = [
  { src: "/images/wishing_stone_cat.jpg", alt: "Cat puppet from The Wishing Stone" },
  { src: "/images/wishing_stone_girl.jpg", alt: "Crying girl scene from The Wishing Stone" },
  { src: "/images/wishing_stone_group.jpg", alt: "Group photo with over 250 attendees" }
];

// Combined list of Works and Awards
export const WORKS_AND_AWARDS: TimelineEntry[] = [
  {
    id: 'ws-2025',
    year: '2025',
    title: 'The Wishing Stone',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright & Organizer. A community production supported by HKADC and HKJC.',
    image: '/images/wishing_stone_cat.jpg',
    highlight: true
  },
  {
    id: 'wgu-2024',
    year: '2024',
    title: 'WGU Tech is Everywhere Scholarship',
    subtitle: 'Western Governors University',
    type: 'scholarship',
    highlight: true
  },
  {
    id: 'clowns-award-2023',
    year: '2023',
    title: 'Outstanding Script Award, 9th Heart River Play Competition',
    subtitle: 'Work: "The Clowns"',
    type: 'award',
    highlight: true
  },
  {
    id: 'clowns-work-2023',
    year: '2023',
    title: 'The Clowns',
    subtitle: 'Pop Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright.'
  },
  {
    id: 'death-girl-2022',
    year: '2022',
    title: 'Shortlisted, 6th Youth Playwriting Scriptwriting Project',
    subtitle: 'Work: "The Death of the Girl"',
    type: 'award'
  },
  {
    id: 'father-daughter-2022',
    year: '2022',
    title: 'Father and Daughter',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright.'
  },
  {
    id: 'princess-2022',
    year: '2022',
    title: 'Princess Hard to Fall (Cancelled)',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright.'
  },
  {
    id: 'self-chat-2022',
    year: '2022',
    title: 'Self Chat (Cancelled)',
    subtitle: 'Shatin Drama Gala / Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright.'
  },
  {
    id: 'wishing-grant-2021',
    year: '2021',
    title: 'Grant & Venue Sponsorship',
    subtitle: 'HKADC & HKJC',
    type: 'grant',
    description: "Project: 'The Wishing Stone'",
    highlight: true
  },
  {
    id: 'cave-investigation-2021',
    year: '2021',
    title: 'Cave Investigation Operation',
    subtitle: 'HKAPA',
    type: 'work',
    category: 'Play/Research',
    description: 'Playwright, Actor-Teacher, Researcher.'
  },
  {
    id: 'pinecone-2021',
    year: '2021',
    title: 'Picture Book: Where is the Pinecone?',
    subtitle: 'BGCA',
    type: 'work',
    category: 'Publication',
    description: 'Author.'
  },
  {
    id: 'dinner-sin-award-2020',
    year: '2020',
    title: 'Outstanding Script Award, 6th Heart River Play Competition',
    subtitle: 'Work: "Dinner Sin"',
    type: 'award',
    highlight: true
  },
  {
    id: 'dinner-sin-work-2020',
    year: '2020',
    title: 'Dinner Sin',
    subtitle: 'Pop Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright. Award-winning script.',
    image: '/images/3.jpg'
  },
  {
    id: 'green-balcony-2020',
    year: '2020',
    title: 'Green Balcony',
    subtitle: 'HKAPA',
    type: 'work',
    category: 'Education',
    description: 'Actor-Teacher.'
  },
  {
    id: 'murder-cave-2020',
    year: '2020',
    title: 'Murder in the Cave',
    subtitle: 'HKAPA',
    type: 'work',
    category: 'Play',
    description: 'Playwright, Actor.'
  },
  {
    id: 'glass-zoo-2020',
    year: '2020',
    title: 'The Glass Menagerie (Cancelled)',
    subtitle: 'Shatin Drama Gala / Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright.'
  },
  {
    id: 'hkapa-scholarship-2019',
    year: '2019/20',
    title: 'HKAPA Alumni Association Scholarship',
    type: 'scholarship'
  },
  {
    id: 'ward-1-2019',
    year: '2019',
    title: 'Ward No. 1',
    subtitle: 'HKAPA',
    type: 'work',
    category: 'Play',
    description: 'Actor.'
  },
  {
    id: 'swallow-2018',
    year: '2018',
    title: 'The Adventure of Swallow',
    subtitle: 'HK Financial Literacy Month x BGCA',
    type: 'work',
    category: 'Play',
    description: 'Writer & Director. Funded by IEC.',
    image: '/images/2.jpg'
  },
  {
    id: 'future-vault-2018',
    year: '2018',
    title: 'Future Vault',
    subtitle: 'The HK Association of Banks x BGCA',
    type: 'work',
    category: 'Play',
    description: 'Playwright, Director.'
  },
  {
    id: 'hell-walk-2018',
    year: '2018',
    title: 'Hell Walk',
    subtitle: 'Shatin Drama Gala / Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright, Director. Featuring cardboard set design.',
    image: '/images/11.jpg'
  },
  {
    id: 'choice-happiness-2017',
    year: '2017',
    title: 'The Choice of Happiness',
    subtitle: 'Shatin Drama Gala / Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright, Director.'
  },
  {
    id: 'gossip-murder-2017',
    year: '2017',
    title: 'The Gossip Murder CaseFiles',
    subtitle: 'Cinematic Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright.'
  },
  {
    id: 'truth-newsroom-2016',
    year: '2016',
    title: 'The Truth Newsroom',
    subtitle: 'Shatin Drama Gala / Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright. Exploring press freedom.',
    image: '/images/4.jpg'
  },
  {
    id: 'don-quixote-award-2015',
    year: '2015',
    title: 'Outstanding Award, 9th Chinese Stage Script Writing Competition',
    subtitle: 'Work: "My Don Quixote Dad"',
    type: 'award',
    highlight: true
  },
  {
    id: 'don-quixote-work-2015',
    year: '2015',
    title: 'My Don Quixote Dad',
    subtitle: 'Hong Kong Baptist University',
    type: 'work',
    category: 'Play',
    description: 'Playwright. Award-winning script.'
  },
  {
    id: 'squirrel-book',
    year: 'N/A',
    title: 'Picture Book: Squirrel, Wolf, and Stone Spirit',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Publication',
    description: 'Author.'
  }
];
