

declare const __BUILD_TIMESTAMP__: string;

import { ExperienceItem, TimelineEntry } from './types';

// Build timestamp - updated at build time
export const BUILD_TIMESTAMP = __BUILD_TIMESTAMP__;

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
    id: 'ws-2025-play',
    year: '2025',
    title: 'The Wishing Stone',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: `Concept, Playwright: 林建剛
Concept, Actor: 陳曉彤
Producer: 陳顥倡
Director: 朱啟軒
Actors: 葉向玲, 林嘉婷
Actor, Magic Consultant: 洪家澤
Stage & Costume Design: 游倬宜
Lighting Design: Kenny
Sound Design, Composer: 譚柏烜
Key Visual Design: DirtyWork
Stage Manager: 曾念慈
Admin: 歐彩君

Synopsis:
There are all kinds of magical stones in the world! Fifi, a fifth-grade primary school student, accidentally gets a wishing stone that can grant any wish. This playful and lively girl can finally get rid of the trouble of homework! However, the way wishes are granted gradually gets out of control, and she loses her most beloved thing because of it. Under the guidance of her grandmother, she will embark on a journey to find "real magic", learn growth, courage, and how to make up for past mistakes with her own efforts.`,
    image: '/images/The Wishing Stone/poster.png'
  },
  {
    id: 'clowns-2025',
    year: '2025',
    title: 'The Clowns',
    subtitle: 'Calgary Hong Kong Arts & Culture Association',
    type: 'work',
    category: 'Play',
    description: `Playwright: KK Lam
Director: Tiffany Lai
Actors: Tiffany Lai, Dennis Chan

"The Clown" is the winning script of the 9th "Heart River Cultivation Programme".

Synopsis:
With his wedding just around the corner, Kwok Ho encounters an uninvited guest. After a long separation, Siu Yan brings him an unexpected surprise. Faced with the past, where will the two of them go? This is a story about letting go, or the inability to let go.`,
    image: '/images/The Clowns/poster.jpg'
  },
  {
    id: 'memory-2025-cancelled',
    year: '2025',
    title: 'In Search of Memory (Cancelled)',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: `"In Search of Memory" is a devised ethnographic theatre project exploring themes of personal trauma and memory. Inspired by Eric Kandel's autobiography "In Search of Memory", the project integrates theories from anthropology, sociology, and neuroscience. It aims to collect material using qualitative research methods and present it through theatrical performance and installation art. The production process involves practice-as-research, examining ethical issues in theatre creation involving personal trauma and privacy.`,
    image: '/images/In Search of Memory (Cancelled)/poster_v1.png'
  },
  {
    id: 'squirrel-book-2025',
    year: '2025',
    title: 'Picture Book: The Squirrel, the Grey Wolf, and the Stone Spirit (《松鼠 灰狼 石精靈》)',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Publication',
    description: `Story Synopsis:
On the vast grasslands, a tiny Stone Spirit sets out on a journey to discover who he truly is.

Every summer, the Stone Spirits gather to showcase their magical powers—fire, ice, flowers, and more. But the smallest among them has no idea what his own magic is, and leaves the festival feeling lost and uncertain. Encouraged by the Rose Stone Spirit and the words of the wise Basalt Elder, he travels to the Ancient Forest in search of the Mirror of Answers.

Along the way, he meets an energetic Squirrel obsessed with finding the world’s most delicious cookie, and a solitary Wolf whom they rescue from danger. Together, the unlikely trio crosses rivers, cliffs, and darkness, learning courage, patience, and trust.

When disaster strikes and the Squirrel and Wolf fall into a deep cavern, the little Stone Spirit must face his fears alone. In the darkness, he discovers a soft glow rising from within himself—his true magic. Guided by this new light, he finds his friends and finally reaches the Mirror of Answers. There, they each learn something important: the sweetness of sharing, the strength of believing in oneself, and the meaning of family.

The little Stone Spirit realizes he is a Light Stone Spirit—one who can bring hope to others. And though the journey has ended, a new adventure awaits just around the corner.

Production Credits:
Produced by: Lamps Theatre (臨時戲班)
Supported by: Hong Kong Arts Development Council (香港藝術發展局)`,
    image: '/images/The Squirrel, the Grey Wolf, and the Stone Spirit (《松鼠 灰狼 石精靈》)/1.jpeg'
  },
  {
    id: 'father-daughter-2023',
    year: '2023',
    title: 'Father and Daughter (《父與女》)',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: `Synopsis:
A mother is found dead in a chair at home, tied up with various items and covered in bruises from beating. While the police hunt for the suspect, a reporter investigates the reasons behind the incident. What deep hatred exists between the deceased and the murderer? Based on a true case.

Credits:
Director: 黃劍冰
Playwright: 林建剛
Actors: 張至煒, 李耀祺, 張嘉瑩, 梁翠珊, 張妙妙, 戴俊笙
Stage Manager: Jo Leung
Production Manager: 歐彩君
Special Singing: 鄺賢妍`,
    image: '/images/Father and Daughter (《父與女》)/父 與 女 副本 1930.png'
  },
  {
    id: 'clowns-award-2023-9th',
    year: '2023',
    title: '9th Heart River Play Competition (Shortlisted Performance)',
    subtitle: 'Pop Theatre',
    type: 'award',
    category: 'Play',
    description: `Shortlisted Performance: "The Clowns" by KK Lam.
Director: Jacky Cheung Chi Kit.`,
    image: '/images/9th Heart River Play Competition/《The-Clowns》林建剛-2.png'
  },
  {
    id: 'pinecone-2021',
    year: '2021',
    title: 'Picture Book: Where Is the Pine Cone? (《松果在哪裡？》)',
    subtitle: 'Published by KK Lam',
    type: 'work',
    category: 'Publication',
    description: `A story about a squirrel preparing for winter.
eBook version (excerpt): https://www.flipsnack.com/moneymonth/--vc5r333xu3.html`,
    image: '/images/Picture Book Where Is the Pine Cone (《松果在哪裡？》)/Cover.jpg'
  },
  {
    id: 'dinner-sin-award-2020-6th',
    year: '2020',
    title: '6th Heart River Play Competition (Winning Script Public Performance)',
    subtitle: 'Tuen Mun Town Hall Venue Partnership Scheme',
    type: 'work',
    category: 'Play',
    description: `Winning script of the 6th "Heart River Cultivation Programme".
Work: "Dinner Sin" (《飯罪》) - KK Lam.`,
    image: '/images/6th Heart River Play Competition/poster.jpg'
  },
  {
    id: 'murder-cave-2020',
    year: '2020',
    title: 'Murder in the Cave (《洞穴殺人事件》)',
    subtitle: 'HKAPA',
    type: 'work',
    category: 'Play',
    description: `Synopsis:
A cave accident, a murder case. Forced by helplessness? Unforgivable sin? Guilty, not guilty, who is right, who is wrong? The trial is about to begin. *This trial will be conducted online. Story adapted from: The Case of the Speluncean Explorers.

Credits:
Playwright: 林建剛 嚴嘉儀
Director: 林建剛 陳曉彤
Actors: 陳曉彤, 王家兒, 嚴嘉儀, 林建剛, 莫皓中, 鄧永康, 洪家澤, 鍾益秀, 馮迎臨 （香港執業律師）`,
    image: '/images/Murder in the Cave (《洞穴殺人事件》)/poster.jpg'
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
    title: 'Picture Book: The Squirrel, the Grey Wolf, and the Stone Spirit (《松鼠 灰狼 石精靈》)',
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
    title: 'Father and Daughter (《父與女》)',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright.',
    image: '/images/Father and Daughter/父 與 女 副本 1930.png'
  },
  {
    id: 'princess-2022',
    year: '2022',
    title: 'Princess Hard to Fall (Cancelled) (《公主難落記！》)',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright.'
  },
  {
    id: 'self-chat-2022',
    year: '2022',
    title: 'Self Chat (Cancelled) (《自聊》)',
    subtitle: 'Shatin Drama Gala / Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright.'
  },
  {
    id: 'pinecone-2021',
    year: '2021',
    title: 'Picture Book: Where Is the Pine Cone? (《松果在哪裡？》)',
    subtitle: 'BGCA',
    type: 'work',
    category: 'Publication',
    description: 'Author.'
  },
  {
    id: 'dinner-sin-award-2020',
    year: '2020',
    title: 'Outstanding Script Award, 6th Heart River Play Competition',
    subtitle: 'Work: "Dinner Sin" (《飯罪》)',
    type: 'award',
    highlight: true
  },
  {
    id: 'dinner-sin-work-2020',
    year: '2020',
    title: 'Dinner Sin (《飯罪》)',
    subtitle: 'Pop Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright. Award-winning script.',
    image: '/images/Dinner Sin/FB_IMG_1603257499408.jpg'
  },
  {
    id: 'murder-cave-2020',
    year: '2020',
    title: 'Murder in the Cave (《洞穴殺人事件》)',
    subtitle: 'HKAPA',
    type: 'work',
    category: 'Play',
    description: 'Playwright, Actor.',
    image: '/images/Murder in the Cave/1.jpg'
  },
  {
    id: 'cave-investigation-2020',
    year: '2020',
    title: 'Cave Investigation (《洞穴調查行動》)',
    subtitle: 'HKAPA',
    type: 'work',
    category: 'Play/Research',
    description: 'Playwright, Actor-Teacher, Researcher.',
    image: '/images/Cave Investigation Operation - A Process Drama/IMG-20181027-WA0007.jpg'
  },
  {
    id: 'green-balcony-2020',
    year: '2020',
    title: 'Green Balcony (《綠色陽臺》)',
    subtitle: 'HKAPA',
    type: 'work',
    category: 'Education',
    description: 'Actor-Teacher.'
  },
  {
    id: 'glass-zoo-2020',
    year: '2020',
    title: 'The Glass Menagerie (Cancelled) (《玻璃植物園》)',
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
    title: 'Ward No. 1 (《一號病房》)',
    subtitle: 'HKAPA',
    type: 'work',
    category: 'Play',
    description: 'Actor.'
  },
  {
    id: 'hell-walk-2018',
    year: '2018',
    title: 'Hell Walk (《地獄行》)',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright, Director. Featuring cardboard set design.',
    image: '/images/Hell Walk/11.JPG'
  },
  {
    id: 'future-vault-2018',
    year: '2018',
    title: 'Future Vault (《未來金庫》)',
    subtitle: 'The Hong Kong Association of Banks x BGCA',
    type: 'work',
    category: 'Play',
    description: 'Playwright, Director.'
  },
  {
    id: 'swallow-2017',
    year: '2017',
    title: 'The Adventure of Swallow (《燕子堡歷險記》)',
    subtitle: 'Hong Kong Financial Literacy Month x BGCA',
    type: 'work',
    category: 'Play',
    description: 'Writer & Director. Funded by IEC.',
    image: '/images/Hell Walk/2.jpg'
  },
  {
    id: 'choice-happiness-2017',
    year: '2017',
    title: 'The Choice of Happiness (《幸福的抉擇》)',
    subtitle: 'Shatin Drama Gala / Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright, Director.'
  },
  {
    id: 'gossip-murder-2017',
    year: '2017',
    title: 'The Gossip Murder CaseFiles (《是非殺人事件簿》)',
    subtitle: 'Cinematic Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright.'
  },
  {
    id: 'truth-newsroom-2016',
    year: '2016',
    title: 'The Truth Newsroom (《真相編輯室》)',
    subtitle: 'Shatin Drama Gala / Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright. Exploring press freedom.',
    image: '/images/Murder in the Cave/4.jpg'
  },
  {
    id: 'death-girl-2016',
    year: '2016',
    title: 'Shortlisted, 6th Youth Playwriting Scriptwriting Project',
    subtitle: 'Work: "The Death of the Girl" (《少女之死》)',
    type: 'award'
  },
  {
    id: 'don-quixote-award-2015',
    year: '2015',
    title: 'Outstanding Award, 9th Chinese Stage Script Writing Competition',
    subtitle: 'Work: "My Don Quixote Dad" (《我的唐吉叔叔》)',
    type: 'award',
    highlight: true
  },
  {
    id: 'don-quixote-work-2015',
    year: '2015',
    title: 'My Don Quixote Dad (《我的唐吉叔叔》)',
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
