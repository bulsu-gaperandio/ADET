import gaeaProfileImg from '../assets/images/profile/gaea.jpg';
import chappyImg from '../assets/images/dogs/chappy.jpg';
import chewyImg from '../assets/images/dogs/chewy.jpg';
import gorioImg from '../assets/images/dogs/gorio.jpg';
import gaeaAndJoshImg from '../assets/images/personal/gaea-and-josh.jpg';
import holeseekerImg from '../assets/images/projects/holeseeker.png';
import petGroomingImg from '../assets/images/projects/pet-grooming-system.png';
import spaceCooperativeImg from '../assets/images/projects/space-cooperative.png';

/**
 * EASY-TO-EDIT PERSONAL PORTFOLIO CONTENT
 * Update text, photo imports, project screenshots, or social media links here.
 */
export const portfolioData = {
  owner: {
    fullName: 'Gaea Athena Erandio',
    shortName: 'Gaea Athena ♡',
    age: 21,
    role: 'Information Technology Student',
    badge: 'Your friendly neighborhood IT girl ♡',
    profileImage: gaeaProfileImg,
  },

  hero: {
    badge: 'Your friendly neighborhood IT girl ♡',
    heading: "Hi, I'm Gaea Athena ♡",
    subheading:
      'A little bit of creativity, a lot of curiosity, and a heart full of stories.',
    introduction:
      "Hello! I'm Gaea, a 21-year-old Information Technology student who enjoys exploring technology, expressing creativity, and finding happiness in the little things in life.",
    primaryCta: 'Get to Know Me',
    secondaryCta: 'Explore My Projects',
    floatingTraits: [
      { label: 'Charming', icon: '♡', position: 'top-left' },
      { label: 'Yapper', icon: '🎀', position: 'bottom-left' },
      { label: 'Listener', icon: '🌷', position: 'bottom-right' },
    ],
  },

  about: {
    heading: 'A little about me...',
    introduction:
      "I'm Gaea Athena Erandio, a 21-year-old Information Technology student. I'm someone who loves expressing herself, exploring new things, and appreciating the little moments that make life special.",
    signature: "That's me, Gaea ♡",
    cards: [
      {
        id: 'charming',
        title: 'THE CHARMING ONE ♡',
        badge: '01 · Personality',
        accent: 'pink',
        emoji: '♡',
        description:
          'A little bit of charm, a little bit of personality, and a whole lot of being myself.',
        sticker: '✨ Just being me',
      },
      {
        id: 'yapper',
        title: 'THE YAPPER 🎀',
        badge: '02 · Storyteller',
        accent: 'lavender',
        emoji: '🎀',
        description:
          'I love talking, sharing stories, and discussing the most random things. Sometimes, one conversation can turn into hours of storytelling.',
        sticker: '💬 Certified storyteller',
      },
      {
        id: 'listener',
        title: 'THE LISTENER 🌷',
        badge: '03 · Heart',
        accent: 'cream',
        emoji: '🌷',
        description:
          'I genuinely enjoy listening to people and their stories. I believe that sometimes, being there and listening is one of the nicest things you can do for someone.',
        sticker: '🌷 Safe space always',
      },
    ],
  },

  skills: {
    heading: 'My little tech corner.',
    supportingText:
      "A collection of things I've learned, explored, and enjoyed creating.",
    categories: [
      {
        id: 'programming-web',
        title: 'Programming and Web Development',
        subtitle: 'Languages & frameworks I build with',
        accent: 'pink',
        items: [
          { name: 'C++', tag: 'Programming', iconKey: 'cpp' },
          { name: 'Java', tag: 'Object-Oriented', iconKey: 'java' },
          { name: 'HTML', tag: 'Structure', iconKey: 'html' },
          { name: 'CSS', tag: 'Styling & Layout', iconKey: 'css' },
          { name: 'JavaScript', tag: 'Interactivity', iconKey: 'js' },
          { name: 'React', tag: 'UI Components', iconKey: 'react' },
        ],
      },
      {
        id: 'database-tools',
        title: 'Database and Development Tools',
        subtitle: 'Data management & cross-platform tools',
        accent: 'lavender',
        items: [
          { name: 'SQL', tag: 'Query Language', iconKey: 'sql' },
          { name: 'MySQL', tag: 'Relational DB', iconKey: 'mysql' },
          { name: 'Firebase', tag: 'Backend & Cloud', iconKey: 'firebase' },
          { name: 'Flutter', tag: 'Mobile UI', iconKey: 'flutter' },
        ],
      },
      {
        id: 'creative',
        title: 'Creative Skills',
        subtitle: 'Visual storytelling & digital aesthetics',
        accent: 'rose',
        items: [
          { name: 'Photo Editing', tag: 'Visual Polish', iconKey: 'photo' },
          { name: 'Video Editing', tag: 'Storytelling', iconKey: 'video' },
          { name: 'Creative Design', tag: 'UI & Layouts', iconKey: 'design' },
        ],
      },
    ],
  },

  projects: {
    heading: "Things I've created ♡",
    supportingText:
      'Every project is another opportunity to learn, experiment, and turn ideas into something meaningful.',
    items: [
      {
        id: 'holeseeker',
        title: 'HOLESeeker',
        category: 'Civic & Road Monitoring System',
        accent: 'pink',
        screenshot: holeseekerImg,
        screenshots: [holeseekerImg],
        screenshotHint: 'src/assets/images/projects/holeseeker.png',
        description:
          'A road defect reporting and monitoring system designed to help citizens report potholes and allow administrators to review and monitor reported road issues.',
        highlights: [
          'Citizen-friendly reporting workflow for road defects and potholes',
          'Administrator review and monitoring interface for reported road issues',
          'Organized status tracking to help keep community road reports clear',
        ],
        technologies: ['Web Application', 'HTML', 'CSS', 'JavaScript', 'Database'],
      },
      {
        id: 'pet-grooming-vet',
        title:
          'Pet Grooming and Veterinary Care Appointment and Billing System',
        category: 'Clinic & Appointment Management',
        accent: 'lavender',
        screenshot: petGroomingImg,
        screenshots: [petGroomingImg],
        screenshotHint: 'src/assets/images/projects/pet-grooming-system.png',
        description:
          'A web-based system designed to manage appointments, customer and pet records, services, billing transactions, and reports.',
        highlights: [
          'Appointment scheduling for pet grooming and veterinary care visits',
          'Centralized management of customer profiles, pet records, and services',
          'Structured billing transactions and summary report generation',
        ],
        technologies: ['Web System', 'HTML', 'CSS', 'JavaScript', 'MySQL / SQL'],
      },
      {
        id: 'space-cooperative',
        title: 'SPACE Cooperative Member Portal',
        category: 'Web & Mobile Member System',
        accent: 'peach',
        screenshot: spaceCooperativeImg,
        screenshots: [spaceCooperativeImg],
        screenshotHint: 'src/assets/images/projects/space-cooperative.png',
        description:
          'A cooperative member management system with web and mobile integration, designed to organize member information and improve accessibility.',
        highlights: [
          'Organized cooperative member records and profile management',
          'Web and mobile integration for convenient member accessibility',
          'Clean interface designed to make member information easy to navigate',
        ],
        technologies: ['Web & Mobile', 'Flutter', 'Firebase', 'React / Web'],
      },
    ],
  },

  littleThings: {
    heading: 'The little things that make me, me.',
    supportingText:
      "Beyond the code, projects, and deadlines, there's a whole little world that makes me who I am.",

    family: {
      sectionLabel: 'A. MY FAMILY ♡',
      heading: 'My favorite kind of love.',
      sisterCard: {
        badge: 'New Chapter ♡',
        title: 'Becoming an Aunt Soon!',
        description:
          "I have a sister, and I'm about to become an aunt! Life is bringing a new little blessing into our family, and I can't wait to experience this new chapter as an aunt.",
        caption:
          '"Life is bringing a new little blessing into our family, and I can\'t wait to experience this new chapter as an aunt."',
      },
      fatherRemembrance: {
        badge: 'In Loving Memory · 3 Years in Heaven',
        heading: 'Forever a part of my story.',
        text: "Some people leave a mark on our hearts that time can never erase. Even though you're no longer here, you will always be part of who I am.",
      },
    },

    dogs: {
      sectionLabel: 'B. MY THREE LITTLE FUR BABIES 🐾',
      heading: 'My three little happinesses.',
      supportingText:
        'Three different personalities, three different kinds of chaos, and so much love.',
      footerNote:
        'My three little sources of happiness, chaos, and unconditional love. ♡',
      list: [
        {
          id: 'chappy',
          name: 'CHAPPY 🎀',
          cleanName: 'Chappy',
          breed: 'Terrier Mix',
          gender: 'Female',
          theme: 'pink',
          badge: '🎀 Little Ball of Chaos',
          image: chappyImg,
          imagePathHint: 'src/assets/images/dogs/chappy.jpg',
          traits: [
            'Naughty',
            'Playful',
            'Makulit',
            'Smart',
            'Loves hugs',
            'Loves eating',
          ],
          description:
            "Meet Chappy, our little ball of chaos! She's naughty, playful, makulit, and surprisingly smart. She absolutely loves hugs and even knows a special trick called 'Hug,' where she gives you an adorable hug. She's also a BIG eater. She loves food so much that she'll practically eat anything, including trash. Yes, literally anything! HAHAHA.",
          tags: [
            'Professional Troublemaker',
            'Hug Specialist',
            'Smart Cookie',
            'Food Lover',
            'Little Miss Makulit',
          ],
          funFact: 'Special talent: Giving hugs on command!',
          decorations: ['🎀', '🐾', '💗'],
        },
        {
          id: 'chewy',
          name: 'CHEWY 🌷',
          cleanName: 'Chewy',
          breed: 'Shih Tzu–Poodle Mix',
          gender: 'Female',
          theme: 'lavender',
          badge: '🌷 Quiet Foodie Queen',
          image: chewyImg,
          imagePathHint: 'src/assets/images/dogs/chewy.jpg',
          traits: [
            'Smallest among the three',
            'Oldest among the three',
            'Quiet',
            'Loves eating',
          ],
          description:
            "Chewy is the smallest of the three, but she's actually the oldest! She's usually quiet and calm, but don't let that fool you. She loves food, and whenever someone is eating, she'll suddenly make sure everyone knows she's there. She's a little foodie with a quiet personality and a big appetite.",
          tags: [
            'The Smallest Baby',
            'The Oldest Sister',
            'Quiet Queen',
            'Food Enthusiast',
            'Tiny but Mighty',
          ],
          funFact: 'Special talent: Making noise whenever someone is eating!',
          decorations: ['🌷', '🌸', '🐾'],
        },
        {
          id: 'gorio',
          name: 'GORIO 🧸',
          cleanName: 'Gorio',
          breed: 'Beagle',
          gender: 'Male',
          theme: 'peach-blue',
          badge: '🧸 Playful Trick Master',
          image: gorioImg,
          imagePathHint: 'src/assets/images/dogs/gorio.jpg',
          traits: [
            'Playful',
            'Knows lots of tricks',
            'Loves toys',
            'Loves ice',
          ],
          description:
            "Gorio is our playful little Beagle who loves having fun! He knows lots of tricks and enjoys showing off what he can do. His favorite things include toys and ice. Whether he's playing with his toys or enjoying some ice, he's always ready for a little adventure.",
          tags: [
            'Trick Master',
            'Toy Lover',
            'Ice Enthusiast',
            'Playful Boy',
            'Little Entertainer',
          ],
          funFact:
            'Special talents: Performing tricks and being obsessed with toys and ice!',
          decorations: ['🧸', '🧊', '🦴'],
        },
      ],
    },

    josh: {
      sectionLabel: 'C. JOSH ♡',
      heading: 'My favorite person.',
      name: 'Josh',
      image: gaeaAndJoshImg,
      imagePathHint: 'src/assets/images/personal/gaea-and-josh.jpg',
      caption: 'Me and my favorite person, collecting little moments together.',
      funFact: "Fun fact: He's a cat person. ♡",
    },

    hobbies: {
      sectionLabel: 'C. MY HOBBIES 🎧',
      heading: 'Things I enjoy doing.',
      items: [
        {
          id: 'movies',
          title: 'Watching Movies',
          description:
            'I enjoy watching movies and getting lost in different stories and worlds.',
          iconKey: 'movies',
          accent: 'pink',
          sticker: '🎬 Story worlds',
        },
        {
          id: 'games',
          title: 'Playing Games',
          description:
            'I enjoy playing games whenever I want to have fun, relax, or challenge myself.',
          iconKey: 'games',
          accent: 'lavender',
          sticker: '🎮 Cozy & fun',
        },
        {
          id: 'music',
          title: 'Listening to Music',
          description:
            'Music is one of the little things that makes ordinary moments better.',
          iconKey: 'music',
          accent: 'cream',
          sticker: '🎧 Everyday soundtrack',
        },
      ],
    },

    loves: {
      sectionLabel: 'D. LITTLE THINGS I LOVE',
      heading: 'Little things I love ♡',
      items: [
        { label: 'Dogs', emoji: '🐾', note: 'My 3 fur babies' },
        { label: 'Cats', emoji: '🐱', note: 'Soft & cute' },
        { label: 'Music', emoji: '🎵', note: 'Sweet melodies' },
        { label: 'Movies', emoji: '🍿', note: 'Different worlds' },
        { label: 'Games', emoji: '🎮', note: 'Fun challenges' },
        {
          label: 'Meaningful conversations',
          emoji: '💬',
          note: 'Late-night stories',
        },
        {
          label: 'Simple happy moments',
          emoji: '🌸',
          note: 'Everyday magic',
        },
      ],
    },
  },

  quote: {
    text: "What's meant for me will find its way to me, at the right time.",
    signature: '— Gaea ♡',
  },

  contact: {
    heading: 'Have something to say?',
    supportingText:
      "I'd love to hear from you! Whether it's about a project, an idea, or just a friendly hello, feel free to reach out.",
    emailAddress: 'gaeaathena22@gmail.com',
    socials: [
      {
        id: 'email',
        label: 'Email',
        displayValue: 'gaeaathena22@gmail.com',
        placeholderText: 'gaeaathena22@gmail.com',
        href: 'mailto:gaeaathena22@gmail.com',
      },
      {
        id: 'instagram',
        label: 'Instagram',
        displayValue: 'geyath_n',
        placeholderText: 'geyath_n',
        href: '',
      },
      {
        id: 'facebook',
        label: 'Facebook',
        displayValue: 'gaea athena',
        placeholderText: 'gaea athena',
        href: '',
      },
      {
        id: 'github',
        label: 'GitHub',
        displayValue: 'bulsu-gaperandio',
        placeholderText: 'bulsu-gaperandio',
        href: '',
      },
    ],
  },

  footer: {
    tagline: 'Made with love, pink, and a little bit of code. ♡',
    copyright: '© 2026 Gaea Athena Erandio',
  },
};
