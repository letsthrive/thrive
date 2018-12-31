import TYPE from './mentor-types';

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
}) => {
  return {
    name,
    profilePicture,
    designation,
    about,
    types,
    bio,
    social: Object.assign({}, {
      linkedin,
      twitter,
      stackoverflow,
      email,
      github,
    })
  }
}

export default [
  makeProfileInfo({
    name: 'Adeel Imran',
    profilePicture: 'https://instagram.flhe7-1.fna.fbcdn.net/vp/388fb254481bc654631ee8da2b6d0395/5CD2461E/t51.2885-19/s320x320/47691569_288218138498359_7897824659771490304_n.jpg?_nc_ht=instagram.flhe7-1.fna.fbcdn.net',
    designation: 'Founder @ Thrive & Fullstack Dev @ Venturedive',
    about: `
      Hello, I believe a good UX can change people’s lives.. Believe me it can & I 
      for one can help in making that change.
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
    email: "farooqahmadkhan003@gmail.com",
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
];