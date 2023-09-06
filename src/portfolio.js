/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Awais Fayyaz",
  title: "Hi all, I'm Awais",
  subTitle: emoji(
    "Enthusiast, Inquisitive, and Self-Driven Software Engineer 🚀 with over 6 Years of Experience in Crafting Exceptional Experiences on Apple Platforms."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1yJeb2cYvLXwAlXAf7xNLi-v604A-k_0d/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AwaisFayyaz",
  linkedin: "https://www.linkedin.com/in/awais-fayyaz/",
  gmail: "awaisfayyaz.dev@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/7698092/awais-fayyaz",
  twitter: "https://twitter.com/abulkhairawais",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About Me",
  subTitle: "By crafting innovative and intuitive experiences with code, my mission is to make the world a better place, one app at a time.",
  skills: [
    emoji(
      "⚡ Design and develop an iOS application from scratch to the App Store."
    ),
    emoji("⚡ Perform updates or add features to an existing iOS application."),
    emoji(
      "⚡ Need help with publishing your app? Well, I have got you covered."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "FAST - NUCES",
      logo: require("./assets/images/logo-fast.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "August 2013 - August 2017",
      desc: "Learned the core of software engineering, including object oriented programming, Data structures and Algorithms, Databases, Advanced Programming etc",
      descBullets: [
        "Learned C++, HTML, CSS, PHP, MySQL, Java",
        "Volunteered for teaching assistant at FAST"
      ]
    },
    {
      schoolName: "Punjab Group of Colleges",
      logo: require("./assets/images/logo-punjab-college.png"),
      subHeader: "Intermediate of Science in Computer Science",
      duration: "Aug 2009 - Aug 2011",
      desc: "The intermediate of Computer Science (ICS) program provides general education in Computer Science and software Development",
      descBullets: ["Math, Physics, Computer Science"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior iOS Engineer",
      company: "NextBridge Ltd",
      companylogo: require("./assets/images/logo-nextbridge.jpeg"),
      date: "August 2020 – Present",
      desc: "I am responsible for the design and development of native iOS applications for iPhones and iPad. Also providing support for existing iOS applications ",
      descBullets: [
        "Designed and Developed a native iOS application (Centerpoint Connect) from scratch featuring offline support and published it to the App Store.",
        "Managed a complex code base utilizing advanced coding techniques and patterns, successfully addressed the problems, and eventually released it on the App Store.",
        "Languages/Technologies Used. iOS, Objective C, Swift, Swift UI, Xcode, UIKit, Storyboard, Combine Framework, Core Data, Realm, AVFoundation and many others."
      ]
    },
    {
      role: "iOS Developer",
      company: "Conovo Technologies",
      companylogo: require("./assets/images/logo-conovo.jpeg"),
      date: "Sep 2018 – Dec 2019",
      desc: "My main responsibilities included the design and development of native iOS applications from scratch to publishing on the app store. Here are some of the highlights:",
      descBullets: [
        "Created the version 2 of 'TextBehind ' a native iOS application for connecting with incarcerated loved ones. Implemented a drawing pad.",
        "Upgraded 'Malena' native iOS application to modern Design and added features. Enhanced Google maps experience using clustering.",
        "Successfully Created a mac OS application in Objective C for trimming silence in audio files."
      ]
    },
    {
      role: "iOS Developer",
      company: "Self Employed/Freelance",
      companylogo: require("./assets/images/skills.png"),
      date: "March 2020 – Aug 2020",
      desc: "I've had the privilege of collaborating with three diverse clients on freelance iOS contracts, where I passionately contributed to the development of these iOS applications.",
      descBullets: [
        "MyBusks: I spearheaded the design and development of a seamless native iOS application, ensuring a user-friendly experience from start to finish.",
        "WifiLink: I enhanced the functionality of this app by incorporating WiFi sharing and speed test features, elevating its usability and performance.",
        "Call Recorder: Leveraging the powerful Twilio Framework, I crafted an iOS application dedicated to call recording, catering to the needs of users seeking this essential functionality."
      ]
    },
    {
      role: "iOS Developer",
      company: "Brainplow",
      companylogo: require("./assets/images/logo-brainplow.jpeg"),
      date: "Aug 2017 – Aug 2018",
      desc: "My professional journey commenced in the dynamic environment of a startup, where I played a pivotal role in conceptualizing, designing, and developing two eCommerce applications.",
      descBullets: [
        "SellNRoar: Fueled by my passion for growth, I took on the challenge of crafting this eCommerce platform. Using iOS, Swift, and Xcode, I connected buyers and sellers in the online marketplace, driven by my determination to learn and adapt",
        "Exploring a range of languages and technologies, I worked with iOS, Swift, Xcode, UIKit, Storyboard, REST APIs, Google Maps, and Firebase to develop solutions that addressed the evolving demands of the eCommerce industry"
        
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3137705097",
  email_address: "awaisfayyaz.dev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
