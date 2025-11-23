
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
    year: "2025–present",
    company: "surtitlelive.com",
    title: "Developer"
  },
  {
    year: "2025–present",
    company: "Calgary Hong Kong Arts & Culture Association, Canada",
    title: "Board of Director"
  },
  {
    year: "2017–present",
    company: "Lamps Theatre Hong Kong",
    title: "Playwright & Drama Education Project Manager"
  },
  {
    year: "2017 - 2021",
    company: "The Boys' & Girls' Clubs Association of Hong Kong (Community Creative Learning Centre)",
    title: "Assistant Project Manager and Drama Educator"
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
  },
  {
    year: "2014 - 2016",
    company: "Hong Kong",
    title: "Teaching Practicum – Liberal Studies"
  }
];

// Featured Work: The Wishing Stone
export const WISHING_STONE_IMAGES = [
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-38-58 2.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-38-58.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-38-59 2.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-38-59.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-39-00 2.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-39-00.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-39-01 2.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-39-01.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-39-02 2.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-39-02.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-39-03.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-39-04 2.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-39-04 3.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-39-04.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-39-05 2.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-39-05.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-39-06 2.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-39-06.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-39-07 2.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-16-39-07.jpg", alt: "The Wishing Stone Scene" },
  { src: "/images/The Wishing Stone/PHOTO-2025-03-22-23-52-02.jpg", alt: "The Wishing Stone Scene" }
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
    description: 'Playwright & Organizer. Supported by Hong Kong Arts Development Council (Emerging Artists Scheme) and The Hong Kong Jockey Club.',
    image: '/images/The Wishing Stone/PHOTO-2025-03-22-16-39-07 2.jpg',
    highlight: true
  },
  {
    id: 'clowns-calgary-2025',
    year: '2025',
    title: 'The Clowns',
    subtitle: 'Calgary Hong Kong Arts & Culture Association',
    type: 'work',
    category: 'Play',
    description: 'Playwright.',
    image: '/images/The Clowns/IMG_7423.JPG'
  },
  {
    id: 'memory-2025',
    year: '2025',
    title: 'In Search of Memory (Cancelled)',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: 'Supported by Hong Kong Arts Development Council (Emerging Artists Scheme).'
  },
  {
    id: 'squirrel-book-2025',
    year: '2025',
    title: 'Picture Book: The Squirrel, the Grey Wolf, and the Stone Spirit',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Publication',
    description: 'Author.'
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
    id: 'father-daughter-2023',
    year: '2023',
    title: 'Father and Daughter',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright.',
    image: '/images/Father and Daughter/父 與 女 副本 1930.png'
  },
  {
    id: 'pinecone-2021',
    year: '2021',
    title: 'Picture Book: Where Is the Pine Cone?',
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
    image: '/images/Dinner Sin/FB_IMG_1603257499408.jpg'
  },
  {
    id: 'murder-cave-2020',
    year: '2020',
    title: 'Murder in the Cave',
    subtitle: 'HKAPA',
    type: 'work',
    category: 'Play',
    description: 'Playwright, Actor.',
    image: '/images/Murder in the Cave/1.jpg'
  },
  {
    id: 'cave-investigation-2020',
    year: '2020',
    title: 'Cave Investigation',
    subtitle: 'HKAPA',
    type: 'work',
    category: 'Play/Research',
    description: 'Playwright, Actor-Teacher, Researcher.',
    image: '/images/Cave Investigation Operation - A Process Drama/IMG-20181027-WA0007.jpg'
  },
  {
    id: 'hkapa-scholarship-2019',
    year: '2019/20',
    title: 'HKAPA Alumni Association Scholarship',
    type: 'scholarship'
  },
  {
    id: 'hell-walk-2018',
    year: '2018',
    title: 'Hell Walk',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright, Director. Featuring cardboard set design.',
    image: '/images/Hell Walk/11.JPG'
  },
  {
    id: 'future-vault-2018',
    year: '2018',
    title: 'Future Vault',
    subtitle: 'The Hong Kong Association of Banks x BGCA',
    type: 'work',
    category: 'Play',
    description: 'Playwright, Director.'
  },
  {
    id: 'swallow-2017',
    year: '2017',
    title: 'The Adventure of Swallow',
    subtitle: 'Hong Kong Financial Literacy Month x BGCA',
    type: 'work',
    category: 'Play',
    description: 'Writer & Director. Funded by IEC.',
    image: '/images/Hell Walk/2.jpg'
  },
  {
    id: 'death-girl-2016',
    year: '2016',
    title: 'Shortlisted, 6th Youth Playwriting Scriptwriting Project',
    subtitle: 'Work: "The Death of the Girl"',
    type: 'award'
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
  }
];

export const EDUCATION: ExperienceItem[] = [
  {
    year: "2024–2025",
    company: "Western Governors University (WGU), United States",
    title: "Bachelor of Science in Information Technology"
  },
  {
    year: "2018–2021",
    company: "The Hong Kong Academy for Performing Arts (HKAPA), Hong Kong",
    title: "Master of Fine Arts in Drama and Theatre Education"
  },
  {
    year: "2011–2016",
    company: "Hong Kong Baptist University (HKBU), Hong Kong",
    title: "Bachelor of Social Sciences (Honours) in Sociology, Bachelor of Education (Honours) in Liberal Studies Teaching, Minor in History"
  }
];
