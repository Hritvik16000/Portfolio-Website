import { 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiJavascript, 
  SiReact, 
  SiMongodb, 
  SiPython, 
  SiPandas, 
  SiMicrosoftexcel,  
  SiScikitlearn, 
  SiTableau 
} from "react-icons/si";
import { 
  FaGithub, 
  FaLinkedin, 
  FaNewspaper, 
  FaNode 
} from "react-icons/fa";

import { IMe, ITheme } from "./me.interface";

// Warning: Don't use "black" or "white" values
export const themeColor: ITheme = "orange";

// Multiple theme options
export const multiThemeOptions: ITheme[] = [
  "orange",
  "purple",
  "blue",
  "red",
  "pink",
  "green",
];

// To disable support for multiple themes, set this value to `false`;
export const enableMultiTheme: boolean = true;

export const me = {
  name: "Hritvik Dadhich",
  // Facts are optional
  facts: [
    "I have a PhD in Googling; it’s like data science but with fewer statistical models and more cat memes.",
    "Why do data scientists prefer dark mode? Because light attracts bugs!",
    "I tried to build a neural network, but all I got was a lot of unhelpful feedback—turns out it didn’t like my input.",
    "I use regression analysis to figure out why my plants keep dying; sadly, I’m still overfitting my watering schedule.",
    "Ever seen a group of engineers at a party? Just look for the ones huddled around the Wi-Fi router!",
    "My idea of a balanced diet? A laptop in one hand and a coffee in the other—always running on data and caffeine.",
    "If at first, you don’t succeed, redefine success in your project scope—and maybe call it a prototype!"
],
  subtitle: "Data Analyst/MERN Stack Developer",
  tagline:
    "I love to solve complex Data Problems and build frontend websites, high-quality experiences and continuously learn new things.",
  bigHeading: {
    black: "I give Datasets",
    blue: "meaningful insights",
  },
  about:
    "MSc Data Science graduate proficient in Python, SQL, Tableau, and the MERN stack, including React.js, JavaScript, HTML, and CSS3. Adept at transforming complex data into actionable insights and developing data-driven solutions. Demonstrated ability to enhance user experiences and collaborate in cross-functional teams. Eager to leverage analytical skills, technical proficiency, and problem-solving abilities in a dynamic data science role. Proficient in data visualization and machine learning techniques.",
  location: "Basingstoke, United Kingdom",
  image: "/assets/Hritvik_Dadhich.PNG",

  education: [
    {
      degree: "MSc Data Science",
      school: "Cardiff Metropolitan University",
      location: "Cardiff, United Kingdom",
      graduation: "January 2023 - June 2024",
    },
    {
      degree: "MERN Stack Development",
      school: "Indian Institute of Technology",
      location: "Madras, India",
      graduation: "June 2021 - December 2022",
    },
    {
      degree: "B.E Computer Science",
      school: "Bharati Vidyapeeth College of Engineering",
      location: "Pune, India",
      graduation: "April 2017 - May 2021",
    },
  ],
  experience: [
    {
      company: "FutureGaming.io - Gaming News, Guides & More",
      location: "Lucknow, India",
      position: "Data Analyst",
      duration: "July 2021 - December 2022",
      bullets: [
        "Conducted comprehensive data analysis across multiple data sources, identifying key trends that contributed to a 10% improvement in KPIs.",
        "Analyzed large, complex datasets to extract actionable insights, driving data-driven decision-making that enhanced overall company performance.",
        "Ensured high accuracy and attention to detail during data validation processes, reducing data-related errors by 25%.",
        "Collaborated with cross-functional teams, including marketing, product, and development, to deliver data-backed recommendations and ensure projects were completed on time and within budget.",
        "Developed and maintained dashboards to track key business metrics, facilitating real-time monitoring and reporting for senior management.",
      ],
    },
  ],
  projects: [
    {
      name: "AirBnb-Clone",
      description: "An AirBnb clone that allows users to book hotels and hostels for travelers and wanderers.",
      contribution: "I developed the app's frontend using React.js and managed user interactions to replicate AirBnb's functionality for booking accommodations.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
      links: [
        {
          name: "Website",
          uri: "https://cheerful-churros-0c6e30.netlify.app/",
        },
        {
          name: "Github",
          uri: "https://github.com/Hritvik16000/Capstone-frontend",
        },
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_fD69WAlWTpy9R1jC0HSjWDKNmhEemzU1g&usqp=CAU",
    },
    {
      name: "Keep-Note",
      description: "A note-taking app that allows users to add and delete notes, similar to Google Keep.",
      contribution: "I built the front end of the app using React.js, allowing users to easily manage their notes with an intuitive interface.",
      technologies: ["HTML", "CSS", "React.js"],
      links: [
        {
          name: "Website",
          uri: "https://whimsical-khapse-7c5b2a.netlify.app",
        },
        {
          name: "Github",
          uri: "https://github.com/Hritvik16000/Notes-banao",
        },
      ],
      image: "https://cdn.neow.in/news/images/uploaded/2018/09/1537418720_keep_notes.jpg",
    },
    {
      name: "Movie-App",
      description: "A movie management app where users can add, delete, and like/dislike movies, with access to trailers and movie details.",
      contribution: "Developed the app with React.js and provided movie details and interaction features like liking and disliking movies.",
      technologies: ["HTML", "CSS", "React.js"],
      links: [
        {
          name: "Website",
          uri: "https://vermillion-creponne-456934.netlify.app",
        },
        {
          name: "Github",
          uri: "https://github.com/Hritvik16000/Movie-app-",
        },
      ],
      image: "https://troypoint.com/wp-content/uploads/2023/03/movie-hd.jpg",
    },
    {
      name: "Library Management App",
      description: "A library management system to keep track of borrowed books, manage new book records, and monitor library inventory.",
      contribution: "Designed the app to manage book records and borrowing status, enabling efficient library management with a user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          name: "Website",
          uri: "https://gleaming-syrniki-ada1de.netlify.app",
        },
        {
          name: "Github",
          uri: "https://github.com/Hritvik16000/Day-32-Task-Library-Management-",
        },
      ],
      image: "https://img.freepik.com/free-photo/young-woman-studying-library_1303-19014.jpg?w=2000",
    },
    {
      name: "NBA All-Star Prediction Model",
      description: "A machine learning model that predicts NBA All-Star players based on their historical performance data with 95% accuracy.",
      contribution: "Built a machine learning model using Python to predict NBA All-Stars based on player performance metrics and game statistics.",
      technologies: ["Python", "Matplotlib", "SK-learn", "Regression Model"],
      links: [
        {
          name: "Github",
          uri: "https://github.com/Hritvik16000/NBA-All-Star-prediction-Model-Using-Machine-learning",
        },
        {
          name: "Model Code",
          uri: "https://github.com/Hritvik16000/NBA-All-Star-prediction-Model-Using-Machine-learning/blob/main/St20249004_CIS7017_YR_23%20Technology%20Dissertation_YR_23.py",
        },
      ],
      image: "https://cdn.nba.com/manage/2023/02/nba-vs-world-GRAPHIC.jpg",
    },
    {
      name: "InSight-Loom",
      description: "A web app that visualizes and analyzes sentiment data from various sources, leveraging NLP techniques to provide insights into text data.",
      contribution: "Built the app to process large datasets using NLP techniques and provide insights into sentiment trends through visualizations.",
      technologies: ["Python", "NLP", "Streamlit"],
      links: [
        {
          name: "Website",
          uri: "https://hritvik16000-insight--loom-main-qtwgea.streamlit.app/",
        },
        {
          name: "Github",
          uri: "https://github.com/Hritvik16000/InSight--Loom/tree/master",
        },
      ],
      image: "/main.png",
    },
    {
      name: "File Sharing System Based on Blockchain",
      description: "A secure file-sharing application using blockchain technology to ensure data integrity and confidentiality.",
      contribution: "Developed a decentralized file-sharing system with IPFS for file storage and smart contracts using Solidity to ensure secure transactions.",
      technologies: ["React.js", "Truffle", "Ganache", "IPFS", "Solidity", "HTML", "CSS"],
      links: [
        {
          name: "Github",
          uri: "https://github.com/Hritvik16000/Secure-file-sharing---Blockchain/tree/master",
        },
      ],
      image: "https://i0.wp.com/blog.nashtechglobal.com/wp-content/uploads/2024/04/IPFS.jpg?fit=1200%2C573&ssl=1",
    },
  ],
  skills: [
    {
      name: "HTML",
      icon: SiHtml5,
    },
    {
      name: "CSS",
      icon: SiCss3,
    },
    {
      name: "Bootstrap",
      icon: SiBootstrap,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "React",
      icon: SiReact,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "Node.js",
      icon: FaNode,
    },
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name: "Pandas",
      icon: SiPandas,
    },
    {
      name: "MS-Excel",
      icon: SiMicrosoftexcel,
    },

    {
      name: "Scikit-learn",
      icon: SiScikitlearn,
    },
    {
      name: "Tableau",
      icon: SiTableau,
    },
  ],

  social: [
    {
      name: "Resume",
      icon: FaNewspaper,
      uri: "assets/H.Dadhich.pdf",
      hover: {
        bg: ["brand.500", "brand.700"],
        color: "white",
      },
    },
    {
      name: "Github",
      icon: FaGithub,
      uri: "https://github.com/Hritvik16000",
      hover: {
        bg: ["gray.900", "gray.800"],
        color: "white",
      },
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      uri: "https://www.linkedin.com/in/hritvik-dadhich/",
      hover: {
        bg: ["linkedin.500", "linkedin.700"],
        color: "white",
      },
    },
  ],

  contact: {
    email: "Hritvik.sajo@gmail.com",
  },
} as IMe;
