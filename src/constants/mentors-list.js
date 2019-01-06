// icons
import LinkedinIcon from 'mdi-material-ui/LinkedinBox';
import TwitterIcon from 'mdi-material-ui/TwitterBox';
import SOIcon from 'mdi-material-ui/StackOverflow';
import EmailIcon from 'mdi-material-ui/Email';
import Githubcon from 'mdi-material-ui/GithubBox';
import PaperclipIcon from 'mdi-material-ui/Paperclip';
import FacebookBox from 'mdi-material-ui/FacebookBox';
// constants
import TYPE from './mentor-types';

const getIconInfo = ({ type, url, icon }) => {
  if (type === 'email') {
    url = `mailto:${url}?subject=[Thrive] Mentorship Guidance For {Subject}`;
  }
  return Object.assign({}, { type, url, icon });
}

const makeProfileInfo = ({ 
  name = '',
  profilePicture = '',
  designation = '',
  about= '',
  types = [],
  bio = [],
  linkedin = null,
  twitter = null,
  stackoverflow = null,
  email = null,
  github = null,
  other = null,
  facebook = null,
} = {}) => {
  return {
    name,
    profilePicture,
    designation,
    about,
    types,
    bio,
    social: [
      ...(linkedin && getIconInfo({ type: 'linkedin', url: linkedin, icon: LinkedinIcon })),
      ...(twitter && getIconInfo({ type: 'twitter', url: twitter, icon: TwitterIcon })),
      ...(stackoverflow &&  getIconInfo({ type: 'stackoverflow', url: stackoverflow, icon: SOIcon })),
      ...(email && getIconInfo({ type: 'email', url: email, icon: EmailIcon })),
      ...(github && getIconInfo({ type: 'github', url: github, icon: Githubcon })),
      ...(facebook && getIconInfo({ type: 'facebook', url: facebook, icon: FacebookBox })),
      ...(other && getIconInfo({ type: 'other', url: other, icon: PaperclipIcon })),
    ].filter(Boolean),
  }
}

export default [
  makeProfileInfo({
    name: 'Adeel Imran',
    profilePicture: 'https://instagram.flhe7-1.fna.fbcdn.net/vp/388fb254481bc654631ee8da2b6d0395/5CD2461E/t51.2885-19/s320x320/47691569_288218138498359_7897824659771490304_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net',
    designation: 'Founder @ Thrive & Fullstack Dev @ Venturedive',
    about: `
      I want to change the world one day & inspire everyone along the way. I love code & I
      enjoy working on complex problems.
    `,
    types: [TYPE.FULLSTACK_DEVELOPER, TYPE.CONTENT_WRITER],
    bio: [
      "I am a full stack developer and designer focusing on making a great UI/UX. I have a passion for working with startups & growing companies by assisting them in creating outstanding product. I live in Lahore, Pakistan, with my 2 dogs. In the past few years, I have had the experience of working with numerous clients from all over the world.",
      "I enjoy taking complicated problems & turning them into simple, elegant solutions. I love writing beautiful code that is written structurally & indented properly.",
      "When I am not doing my ninja skills with code or fighting crime, you'll probably find me in the gym or at a coffee shop sipping on some good cappuccino."
    ],
    linkedin: "https://linkedin.com/in/adeelimran/",
    twitter: "https://twitter.com/adeelibr",
    stackoverflow: "https://stackoverflow.com/users/story/4921319",
    email: "adeelimranr@gmail.com",
    github: "https://github.com/adeelibr",
  }),
  makeProfileInfo({
    name: 'Kent C Dodds',
    profilePicture: 'https://pbs.twimg.com/profile_images/759557613445001216/6M2E1l4q_400x400.jpg',
    designation: 'Software Engineer @ Paypal',
    about: `
      I help build awesome experiences for the millions of people who use PayPal's products 
      & services. I spend most of my time with React & Node.
    `,
    types: [TYPE.FULLSTACK_DEVELOPER],
    github: "https://github.com/kentcdodds/ama",
  }),
  makeProfileInfo({
    name: 'Mashhood Rastgar',
    profilePicture: 'https://i.imgur.com/Gqx7Fq6.jpg',
    designation: 'CTO @ Sastaticket.pk',
    about: `
      Working on building the best travel platform in Pakistan @Sastaticket. 
      Full stack dev spending time mostly on React/Python & AWS.
    `,
    types: [TYPE.FULLSTACK_DEVELOPER],
    bio: [
      "Mashhood leads the engineering team at Sastaticket.pk. He specializes in using the latest web technologies available to develop the best travel platform in the country.",
      "He is also an active developer community member, is currently serving as a Google Developer Expert and is speaking at several international conferences during the year.",
    ],
    facebook: "http://facebook.com/mashhoodr",
    twitter: "https://twitter.com/mashhoodr",
    github: "https://github.com/mashhoodr",
  }),
  makeProfileInfo({
    name: 'Sakhi Mansoor',
    profilePicture: 'https://scontent.flhe7-1.fna.fbcdn.net/v/t1.0-9/48390432_2206216339409799_5015117506335997952_n.jpg?_nc_cat=109&_nc_ht=scontent.flhe7-1.fna&oh=fd9cb650910ccec3513bdf41c032bcbb&oe=5CC96788',
    designation: 'Javascript Rockstar @ Venturedive',
    about: `
      I see a long but achievable journey to give a talk while standing in front of 
      top-tier engineers of JavaScript one day.
    `,
    types: [TYPE.FRONTEND_DEVELOPER],
    linkedin: "https://www.linkedin.com/in/sakhi-mansoor-742827147/",
    twitter: "https://twitter.com/sakhisheikh",
  }),
  makeProfileInfo({
    name: "Taley'a Mirza",
    profilePicture: 'https://pbs.twimg.com/profile_images/1067265320266723328/xPJKSOX-_400x400.jpg',
    designation: 'Frontend Dev @ Sastaticket & Organizer @ ReactKHI',
    about: `
      Creative in nature, Love to think, code & solve problems. 
      Enjoy learning & helping others while mentoring and working for the community.
    `,
    types: [TYPE.FRONTEND_DEVELOPER],
    twitter: "https://twitter.com/@taleyamirza",
    github: "http://gitHub.com/taleymirza",
    other: "http://slides.com/taleyamirza",
    facebook: "http://facebook.com/taleyamirza",
  }),
  makeProfileInfo({
    name: 'Shahqaan Qasim',
    profilePicture: 'https://media.licdn.com/dms/image/C5603AQFoZvaq3AmUUg/profile-displayphoto-shrink_800_800/0?e=1551916800&v=beta&t=ri8uZEuraB1E3RhXYsbxU3lRHX3NFvBYuQRosLQAcjQ',
    designation: 'VP of Engineering @ Redbuffer',
    about: `
      I am accountable for delivering business results. I love building great products 
      that address user needs and solve critical business problems.
    `,
    types: [TYPE.FULLSTACK_DEVELOPER],
    linkedin: "https://www.linkedin.com/in/shahqaan/",
    email: "shahqaan.qasim+mentoring@gmail.com",
  }),
  makeProfileInfo({
    name: 'Ayesha Tariq Mahmood',
    profilePicture: 'https://media.licdn.com/dms/image/C4D03AQEQ0Syt2ghZ9g/profile-displayphoto-shrink_800_800/0?e=1551916800&v=beta&t=OefJfj6LnznDS3RqjI-sYHRLvq3gAFmQWlWJE7-06vQ',
    designation: 'Manager People Operations & Development @ Arbisoft',
    about: `
      Experienced People Manager with a demonstrated history of working in the 
      engineering and tech industry.
    `,
    types: [TYPE.HUMAN_RESOURCE],
    linkedin: "https://www.linkedin.com/in/ayesha-tariq-mahmood-20421020/",
  }),
  makeProfileInfo({
    name: 'Muhammad Faisal',
    profilePicture: 'https://media.licdn.com/dms/image/C4D03AQEfWPbD-Gi0oQ/profile-displayphoto-shrink_800_800/0?e=1551916800&v=beta&t=R8crRZQQH2phIuWju8wFW0WYNRWP2_ClKJ4njPSohb8',
    designation: 'Senior Software Engineer @ b4value.net GmbH',
    about: `
      I am a fullstack dev in love with Angular & TypeScript. 
      I can help You learn basic to advanced Angular/Material concepts. 
    `,
    types: [TYPE.FULLSTACK_DEVELOPER],
    linkedin: "https://www.linkedin.com/in/mohammadfaysal/",
    twitter: "https://twitter.com/faisssallll",
    stackoverflow: "https://stackoverflow.com/users/1791913/faisal?tab=profile",
  }),
  makeProfileInfo({
    name: 'Farooq Khan',
    profilePicture: 'https://scontent.flhe7-1.fna.fbcdn.net/v/t1.0-1/c54.0.240.240a/p240x240/16142236_1328498327193233_3373289347100569465_n.jpg?_nc_cat=103&_nc_ht=scontent.flhe7-1.fna&oh=53e1f2f9305891abcbbefd10785c4ff6&oe=5C98C65D',
    designation: 'Java Dev @ Venturedive',
    about: `
      Hey! I’m computer geek, fun friend and prefer tea over coffee. 
      Mostly interested in backend related stuff and food
    `,
    types: [TYPE.BACKEND_DEVELOPER],
    bio: [
      "I am Farooq, you will mostly find me writing java code and thinking about food. Currently I am doing my masters from LUMS and working as java backend developer @VentureDive. I love to discuss backend architecture and design.",
      "I don’t write code to earn or achieve something, I write code because I love to. I do tech blogging and play badminton and table tennis while not writing code.",
    ],
    linkedin: "https://www.linkedin.com/in/farooq-ahmad-khan/",
    twitter: "https://twitter.com/farooqkhanOO3",
    github: "https://github.com/farooqkhan003",
    email: "farooqahmadkhan003@gmail.com",
  }),
  makeProfileInfo({
    name: 'Narain Sagar',
    profilePicture: 'https://avatars0.githubusercontent.com/narainsagar',
    designation: 'Founder  @ RootedGlobal',
    about: `
      Passionate Full-stack developer & consultant spending most of my time with 
      Web technologies (especially JavaScript/PHP).
    `,
    types: [TYPE.FULLSTACK_DEVELOPER, TYPE.ENTREPRENEUR],
    bio: [
      "Aloha, I'm Narain! An extraterrestrial full stack developer, community speaker, tech mentor, an opensource enthusiast and a startups consultant passionate about web platform (especially JavaScript). I live in Karachi, Pakistan and pretty much enjoying my life. I've been working with Web (Javascript, Angular, Node.js, Express.js/Koa2, Loopback, PHP, etc) for the last 3+ years.",
      "I'm a huge fan of test-driven development and maintaining a high standard of code quality by following the market-standards and best-practices. One of my key goals when developing a software is to design it in a way that it's easy to maintain and scale. I've been part of various projects where I've had the range of responsibilities from the development of a user-friendly UI with the help of JavaScript frameworks like Angular/React, well-documented API servers using Node.js including a secure and scalable deployment of web-applications to cloud services like Amazon AWS.",
      "Moreover, I enjoy speaking in front of a crowd, giving training, mentoring and sharing my knowledge through workshops or presentations at various community events and meetups. In my spare time, I like attending conferences & community events/meetups, watching cinemas, reading, traveling, and visiting new places."
    ],
    linkedin: "https://www.linkedin.com/in/narainsagar",
    twitter: "https://twitter.com/narainsagar",
    stackoverflow: "https://stackoverflow.com/users/5228251/narainsagar",
    github: "https://github.com/narainsagar",
    email: "narainmenghwar@gmail.com",
  }),
];
