

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
  // 2025
  {
    id: 'memory-2025-cancelled',
    year: '12/2025',
    title: 'Devising Theatre: In Search of Memory (Cancelled) (《記憶的痕跡》編作劇場)',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Education Project',
    description: `"In Search of Memory" is a devised ethnographic theatre project exploring themes of personal trauma and memory. Inspired by Eric Kandel's autobiography "In Search of Memory", the project integrates theories from anthropology, sociology, and neuroscience. It aims to collect material using qualitative research methods and present it through theatrical performance and installation art. The production process involves practice-as-research, examining ethical issues in theatre creation involving personal trauma and privacy.

Supported by Hong Kong Arts Development Council (Emerging Artists Scheme).`,
    images: ['/images/In Search of Memory (Cancelled)/info/poster_v1.png']
  },
  {
    id: 'clowns-2025',
    year: '06/2025',
    title: 'The Clowns (《小丑》)',
    subtitle: 'Calgary Hong Kong Arts & Culture Association',
    type: 'work',
    category: 'Play',
    description: `Playwright: **KK Lam**
Director: Tiffany Lai
Actors: Tiffany Lai, Dennis Chan

"The Clown" is the winning script of the 9th "Heart River Cultivation Programme".

Synopsis:
With his wedding just around the corner, Kwok Ho encounters an uninvited guest. After a long separation, Siu Yan brings him an unexpected surprise. Faced with the past, where will the two of them go? This is a story about letting go, or the inability to let go.`,
    images: [
      '/images/The Clowns/IMG_7423.JPG',
      '/images/The Clowns/IMG_7737.JPG'
    ]
  },
  {
    id: 'ws-2025-play',
    year: '03/2025',
    title: 'The Wishing Stone (《願望石》)',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: `Concept, Playwright: **林建剛 KK Lam**
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
There are all kinds of magical stones in the world! Fifi, a fifth-grade primary school student, accidentally gets a wishing stone that can grant any wish. This playful and lively girl can finally get rid of the trouble of homework! However, the way wishes are granted gradually gets out of control, and she loses her most beloved thing because of it. Under the guidance of her grandmother, she will embark on a journey to find "real magic", learn growth, courage, and how to make up for past mistakes with her own efforts.

Supported by Hong Kong Arts Development Council (Emerging Artists Scheme) and The Hong Kong Jockey Club.`,
    images: ['/images/The Wishing Stone/info/poster.png'],
    highlight: true
  },
  {
    id: 'squirrel-book-2025',
    year: '03/2025',
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
    images: ['/images/The Squirrel, the Grey Wolf, and the Stone Spirit (《松鼠 灰狼 石精靈》)/1.jpeg']
  },

  // 2024
  {
    id: 'wgu-2024',
    year: '11/2024',
    title: 'WGU Tech is Everywhere Scholarship',
    subtitle: 'Western Governors University',
    type: 'scholarship',
    category: 'Education',
    description: '**KK Lam** was awarded the WGU Tech is Everywhere Scholarship by Western Governors University to pursue a Bachelor of Science in Information Technology degree.',
    highlight: true
  },

  // 2023
  {
    id: 'clowns-award-2023',
    year: '06/2023',
    title: 'The Clowns (《小丑》)',
    subtitle: '9th Heart River Play Competition',
    type: 'award',
    category: 'Play',
    description: `Outstanding Script Award & Shortlisted Performance.
Director: Jacky Cheung Chi Kit.`,
    images: ['/images/9th Heart River Play Competition/《The-Clowns》林建剛-2.png'],
    highlight: true
  },

  // 2022
  {
    id: 'father-daughter-2022',
    year: '12/2022',
    title: 'Father and Daughter (《父與女》)',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: `Synopsis:
A mother is found dead in a chair at home, tied up with various items and covered in bruises from beating. While the police hunt for the suspect, a reporter investigates the reasons behind the incident. What deep hatred exists between the deceased and the murderer? Based on a true case.

Credits:
Director: 黃劍冰
Playwright: **林建剛 KK Lam**
Actors: 張至煒, 李耀祺, 張嘉瑩, 梁翠珊, 張妙妙, 戴俊笙
Stage Manager: Jo Leung
Production Manager: 歐彩君
Special Singing: 鄺賢妍`,
    images: ['/images/Father and Daughter (《父與女》)/父 與 女 副本 1930.png']
  },
  {
    id: 'self-chat-2022',
    year: '03/2022',
    title: 'Self Chat (Cancelled*) (《自聊》)',
    subtitle: 'Shatin Drama Gala / Lamps Theatre',
    type: 'work',
    category: 'Education Project',
    description: '*Program cancelled due to the pandemic.'
  },

  // 2021
  {
    id: 'princess-2021',
    year: '12/2021',
    title: 'Princess Hard to Fall (Cancelled*) (《公主難落記！》)',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Education Project',
    description: 'Playwright.\n*Program cancelled due to the pandemic.'
  },
  {
    id: 'pinecone-2021',
    year: '2021',
    title: 'Picture Book: Where Is the Pine Cone? (《松果在哪裡？》)',
    subtitle: 'Published by **KK Lam**',
    type: 'work',
    category: 'Publication',
    description: `A story about a squirrel preparing for winter.
eBook version (excerpt): https://www.flipsnack.com/moneymonth/--vc5r333xu3.html`,
    images: ['/images/Picture Book Where Is the Pine Cone (《松果在哪裡？》)/Cover.jpg']
  },
  {
    id: 'cave-investigation-2021',
    year: '03-06/2021',
    title: 'A process drama: Cave Investigation (《過程劇：洞穴調查行動》)',
    subtitle: 'The Hong Kong Academy for Performing Arts',
    type: 'work',
    category: 'Process Drama/ Research',
    description: `This session served as **KK Lam**'s master's research project, titled:
An action research project examining how Process Drama can encourage senior secondary students to reflect on moral and philosophical dilemmas.`,
    images: ['/images/Cave Investigation Operation - A Process Drama/IMG-20181027-WA0007.jpg']
  },

  // 2020
  {
    id: 'green-balcony-2020',
    year: '11/2020',
    title: 'Theatre-in-Education: Green Balcony (《綠色陽臺》)',
    subtitle: 'The Hong Kong Academy for Performing Arts',
    type: 'work',
    category: 'Education Project',
    description: 'Actor-Teacher.'
  },
  {
    id: 'see-you-zoom-2020',
    year: '09/2020',
    title: 'See You Zoom',
    subtitle: 'Zoom',
    type: 'work',
    category: 'Play',
    description: `A Micro-Ethnographic Drama by a Hong Kong Resident

Living in Hong Kong,
During this time, we continue to be poor but proud,
Continuing to stare at the fluctuating pandemic figures, our moods jumping up and down with the numbers;
Continuing to maintain social distancing;
Continuing to learn to hesitate slightly when shaking hands or hugging others;
Continuing to create.

This is a micro-ethnographic drama created via Zoom during the rebound outbreak of the pandemic in Hong Kong, sharing the Hong Kong stories of different people through performance. The audience will be invited to participate interactively in real-time during the performance, jointly constructing a story about constant adaptation in life and the struggle again and again. See You Zoom debuted earlier this year with enthusiastic audience response and full houses. This performance specially adds multiple sessions and welcomes the audience again with a strengthened team.

Before we know how to summarize 2020, in the deep autumn with high skies and clear waters, let's See You Zoom Again and gather interactively online!

Creative Team:
Devising Director: 黃婉萍^
Devising Actors: 陳曉欣^、陳麗華、馮世權、黃逸熹
Production Members: 徐靈芝、洪家澤^、郭卓靈、**林建剛 KK Lam**、王家兒
Set & Art: 曾文通
Composer: Frankie Ho
Illustration: Karmen Loh
^With permission from the School of Drama, HKAPA

Date | Time:
29.9 – 4.10.2020 | 8pm
1 – 4.10.2020 | 3pm
Program duration approximately 1 hour 30 minutes.

Language:
Performed in Cantonese, with a small amount of Mandarin.

Online Platform:
Zoom

Quota per session:
30 (First come, first served)`,
    images: ['/images/See you zoom/poster.jpg']
  },
  {
    id: 'murder-cave-2020',
    year: '09/2020',
    title: '(Pandemic Period) Online Theatre-in-Education: Murder in the Cave (網上教育劇場：《洞穴殺人事件》)',
    subtitle: 'The Hong Kong Academy for Performing Arts',
    type: 'work',
    category: 'Education Project',
    description: `Synopsis:
A cave accident, a murder case. Forced by helplessness? Unforgivable sin? Guilty, not guilty, who is right, who is wrong? The trial is about to begin. *This trial will be conducted online. Story adapted from: The Case of the Speluncean Explorers.

Credits:
Playwright: **林建剛 KK Lam** 嚴嘉儀
Director: **林建剛 KK Lam** 陳曉彤
Actors: 陳曉彤, 王家兒, 嚴嘉儀, **林建剛 KK Lam**, 莫皓中, 鄧永康, 洪家澤, 鍾益秀, 馮迎臨 （香港執業律師）`,
    images: ['/images/Murder in the Cave (《洞穴殺人事件》)/poster.jpg']
  },
  {
    id: 'dinner-sin-2020',
    year: '06/2020',
    title: 'Dinner Sin (《飯罪》)',
    subtitle: '6th Heart River Play Competition',
    type: 'work',
    category: 'Play',
    description: `"Dinner Sin" is a tense and exciting script; even during the table read, we felt the intensity! If you want to know how twisty and turny the story development is, remember to buy tickets to support us!

Synopsis:
A father who lost his daughter prepares to visit the Law family. The Law family, hosting this guest, feels extremely uneasy. Facing various ill-intentioned advances, the two fathers begin to discover that their respective daughters each had their secret sides...

Playwright - **KK Lam** Introduction:
Master of Drama Education from HKAPA, former Liberal Studies teacher, currently working in drama education in a non-profit organization.

"Let actors turn the playwright's words into reality on stage."

Public Performance Details:
Date: 1/11/2020 (Sunday)
Time: 3:00pm (Program duration approx. 2 hours)
Venue: Tuen Mun Town Hall Cultural Activities Hall`,
    images: ['/images/Dinner Sin/poster.jpg'],
    highlight: true
  },
  {
    id: 'glass-zoo-2020',
    year: '03/2020',
    title: 'The Glass Menagerie (Cancelled*) (《玻璃植物園》)',
    subtitle: 'Shatin Drama Gala / Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: '*Program cancelled due to the pandemic.'
  },

  // 2019
  {
    id: 'ward-1-2019',
    year: '12/2019',
    title: 'Ward No. 1 (《一號病房》)',
    subtitle: 'The Hong Kong Academy for Performing Arts',
    type: 'work',
    category: 'Play',
    description: `22-23/12/2019 7:30pm
HKAPA Experimental Theatre

Synopsis:
A mental hospital using brand new therapies,
A group of inexplicable mental patients,
A trainee doctor who notices abnormalities,
A past event deliberately avoided.
People who can't walk out, things that can't be walked out of.

In a mental hospital,
How would you prove you don't have mental illness?

Scene List:
Scene 1 | Natural Therapy
Scene 2 | Ward No. 1
Scene 3 | An Air Crash
Scene 4 | Transplant
Scene 5 | The End

Cast:
Yip Heung Ling as Yeung Tsz Yu
Kwong Yin Yin as Shui Shui
Lam Sze Man as Shui Shui (2)/Doctor/Medic/Passenger
Chan Hiu Tung as Tiff/Medic/Passenger
Wong Tsz Ning as Stewardess/Medic
**Lam Kin Kong (KK Lam)** as Paul/Security/Pilot/Medic
Chu Kai Hin as Medic/Steven/Police/Passenger/Guide/Old Doctor
Li Man Lung as Police/Passenger
Chan Chun On as Passenger/Howard`,
  },
  {
    id: 'hkapa-scholarship-2019',
    year: '09/2019-2020',
    title: 'HKAPA Alumni Association Scholarship',
    subtitle: 'The Hong Kong Academy for Performing Arts',
    type: 'scholarship',
    category: 'Education',
    description: '**KK Lam** was awarded the HKAPA Alumni Association Scholarship by The Hong Kong Academy for Performing Arts to pursue a Master of Fine Arts in Drama and Theatre Education degree.'
  },

  // 2018
  {
    id: 'future-vault-2018',
    year: '09-12/2018',
    title: 'Theatre-in-Education: Future Vault School Tour (《未來金庫》)',
    subtitle: 'The Hong Kong Association of Banks x BGCA',
    type: 'work',
    category: 'Education Project/ Play',
    description: `School Tour Interactive Theatre "Future Vault" (18-19)

*Project organized by The Boys' & Girls' Clubs Association of Hong Kong, sponsored by The Hong Kong Association of Banks.

If you could borrow money from your future self, would you "spend future money first" and then wait for your "future" self to repay it?`,
    images: ['/images/Future Vault (《未來金庫》)/未來金庫.jpg']
  },
  {
    id: 'adventure-swallow-2018',
    year: '03/2018',
    title: 'Theatre-in-Education: The Adventure of Swallow (教育劇場：《燕子堡歷險記》)',
    subtitle: 'Hong Kong Financial Literacy Month x BGCA',
    type: 'work',
    category: 'Education Project/ Play',
    description: `Every winter, the birds living in Swallow Castle face a severe test, the "Great Cold Winter". Traditionally, the elderly Grandpa Swallow prepares for Swallow Castle. However, this year Grandpa Swallow encountered obstacles while buying food in the south and could not return in time. Therefore, Grandpa Swallow invited a group of children to Swallow Castle to assist the swallows in preparing for the cold winter. Can the children help the birds of Swallow Castle survive the winter?

Organizer: The Boys' & Girls' Clubs Association of Hong Kong Community Creative Learning Centre
Sponsor: Investor and Financial Education Council
Director: **KK Lam**
Playwright: **KK Lam**

Cast:
Tang Tin Sum, Sin Dik Sang, Cheng Ka Yi
Tsui San Ming, Li Wing Ni, Cheng Yuet`,
    images: ['/images/The Adventure of Swallow (《燕子堡歷險記》)/poster.jpeg']
  },
  {
    id: 'hell-walk-2018',
    year: '03/2018',
    title: 'Hell Walk (《地獄行》)',
    subtitle: 'Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: `The school priest and Religious Studies teacher is actually a monk?!
The otaku classmate actually hides superpowers?!
The grade goddess is actually the daughter of Black Impermanence?!
The female farmer farming in the New Territories is actually White Impermanence?!

A third-rate secondary school, some marginalized oddballs, a group of losers who think "Hell" is more like "Heaven" than the "Human World".

Is the eternal fire of hell more terrible, or is the endless suffering of the human world more unbearable?

Producer: Au Choi Kwan
Playwright: **KK Lam**
Director: **KK Lam**
Actors: Tang Tin Sum, Sin Dik Sang, Cheng Ka Yi, Tsui San Ming, Li Wing Ni, Cheng Yuet, Ng Ho Yan, Ma Cheuk Nam`,
    images: ['/images/Hell Walk (《地獄行》)/poster.jpg']
  },

  // 2017
  {
    id: 'gossip-murder-2017',
    year: '06/2017',
    title: 'Shortlisted, 6th Youth Playwriting Scriptwriting Project: The Gossip Murder CaseFiles (《是非殺人事件簿》)',
    subtitle: 'Cinematic Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright.'
  },
  {
    id: 'choice-happiness-2017',
    year: '03/2017',
    title: 'The Choice of Happiness (《幸福的抉擇》)',
    subtitle: 'Shatin Drama Gala / Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: 'Playwright, Director.'
  },

  // 2016
  {
    id: 'truth-newsroom-2016',
    year: '03/2016',
    title: 'The Truth Newsroom (《真相編輯室》)',
    subtitle: 'Shatin Drama Gala / Lamps Theatre',
    type: 'work',
    category: 'Play',
    description: `"Truth Daily" is a rising online media outlet in Hong Kong in recent years. It prides itself on being different from the traditional press, unhesitatingly adding subjective comments during news reporting, and daring to express its own political stance. Consequently, it has gained the attention of the vast number of Hong Kong netizens, and articles published on its web page often become social topics.

However, after an intern arrived at the newspaper office one day, his investigative reporting style, although not approved by the editor-in-chief, unintentionally reminded the editor of the past.

Is truth important, or is public opinion important?

Scene 1: Truth.
Scene 2: Truth
Scene 3: Truth!
Scene 4: Truth?
Scene 5: Truth...
Scene 6: Really Want (Homophone for Truth)
Scene 7: "Truth"

Director: **KK Lam**
Playwright: **KK Lam**
Stage Manager: Au Choi Kwan
Stage Design: Ng Ho Yan
Lighting: Sin Dik Sang
Props: Cheng Ka Yi

Cast:
Li Wing Ni as Editor-in-Chief - Siu Yan
Sin Dik Sang as Intern Reporter - Kwok Sang
Wong Siu Jin as Young Master Tung
Cheng Ka Yi as Lek Mui
Ng Ho Yan as Mrs. Chan
**KK Lam** as Senior Brother`,
    images: ['/images/真相編輯室/poster.jpg']
  },

  // 2015
  {
    id: 'don-quixote-award-2015',
    year: '12/2015',
    title: 'My Don Quixote Dad (《我的唐吉叔叔》)',
    subtitle: '9th Chinese Stage Script Writing Competition',
    type: 'award',
    category: 'Play',
    description: `Outstanding Award.
Playwright: **KK Lam**.`,
    highlight: true
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
