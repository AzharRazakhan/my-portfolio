// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import shiwansLogo from './assets/company_logo/shiwans_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import iessLogo from './assets/education_logo/iess_logo.png';
import mpuLogo from './assets/education_logo/mpu_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: shiwansLogo,
      role: "Junior Software Developer",
      company: "Shiwansh Solutions",
      date: "October 2025 - Present",
      desc: "Worked with MongoDB for designing and optimizing database schemas. Implemented reusable UI components to improve development speed and maintainability. Optimized application performance and ensured cross-browser compatibility.  Contributed to deployment and hosting workflows using Netlify and other cloud platforms. Actively collaborated with senior developers to learn and implement industry best practices. Continuously improving skills in MERN stack and exploring modern libraries & tools for full-stack development.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        ". Net",
        "C#",
        "SQL",
        "Git",
        
      ],
    },
    // {
    //   id: 1,
    //   img: agcLogo,
    //   role: "Junior Software Developer",
    //   company: "Agumentik Group of Companies",
    //   date: "July 2023 - March 2024",
    //   desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    //   skills: [
    //     "ReactJS",
    //     "Redux",
    //     "JavaScript",
    //     "Tailwind CSS",
    //     "HTML",
    //     "CSS",
    //     "SQL",
    //   ],
    // },
    // {
    //   id: 2,
    //   img: newtonschoolLogo,
    //   role: "Frontend Intern",
    //   company: "Newton School",
    //   date: "September 2021 - August 2022",
    //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "Javascript",
    //     "Bootstrap",
    //     "Figma",
    //     "Material UI",
    //   ],
    // },
  ];
  
  export const education = [
    {
      id: 0,
      img: iessLogo,
      school: "IES University, Bhopal",
      date: "Sept 2025 - July 2027",
      desc: "Currently pursuing Master's degree (MCA) in Computer Applications from IES University, Bhopal. During my time at IES, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: mpuLogo,
      school: " Madhyanchal Professional University College, Bhopal",
      date: "Sept 2022 - July 2025",
      grade: "7.95 CGPA",
      desc: "I completed my Bachelor of Computer Applications (B.C.A) from  Madhyanchal Professional University, Bhopal. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at  Madhyanchal Professional University allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BCA (Bachelor of Computer Applications)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Bhoopnarayan Singh Siya Niranjan Inter College, Muzaffarpur, Bihar",
      date: "Apr 2020 - March 2022",
      grade: "46.4%",
      desc: "I completed my class 12 education from Bhoopnarayan Singh Siya Niranjan Inter College , Muzaffarpur, under the Bihar board, where I studied Physics, Chemistry, and Mathematics PCM.",
      degree: "BSEB(XII) - PCM ",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "S R High School Belwar Chochahan, Vaishali, Bihar",
      date: "Apr 2019 - March 2020",
      grade: "56%",
      desc: "I completed my class 10 education S R High School Belwar Chochahan, Vaishali, under the Bihar board, where I studied Science with Computer.",
      degree: "BSEB(X), Science ",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/shivam-prajapati-1/Github-Profile-search",
      webapp: "https://github-search-profil.netlify.app/",
    },
    {
      id: 1,
      title: "Real-Estate-website",
      description:
        "A full-stack quiz-based platform designed for Real state house  .",
      image: csprepLogo,
      tags: ["React JS",  "HTML", "CSS", "JavaScript"],
      github: "https://github.com/shivam-prajapati-1/Real-Estate-website-React.js",
      webapp: "https://real-state-project-1.netlify.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/shivam-prajapati-1/Movie-Recommendation-App-main",
      webapp: "https://movie-recommendation-app-main.netlify.app/",
    },
    {
      id: 3,
      title: "shopsy-ecommerce-app",
      description:
        "Shopsy is an e-commerce web app built with React, featuring product listing, search, cart, and checkout functionalities. It offers a clean UI and seamless shopping experience for users.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://shopsy-ecommerce-app.netlify.app/#",
    },
    {
      id: 4,
      title: "Virtualr-main",
      description:
        "Virtual Maintainer is a web application designed to manage and monitor virtual tasks efficiently. Built with React, it helps users organize, track, and maintain digital operations through an intuitive and responsive interface.",
      image: taskremLogo,
      tags: ["JavaScript", "React js", "HTML", "CSS"],
      github: "https://github.com/shivam-prajapati-1/Virtualr-main",
      webapp: "https://virtual-main-pp.netlify.app/",
    },
    {
      id: 5,
      title: "Image-search-app",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: webverLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/shivam-prajapati-1/Image-search-app",
      webapp: "https://image-sear-app.netlify.app/",
    },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  