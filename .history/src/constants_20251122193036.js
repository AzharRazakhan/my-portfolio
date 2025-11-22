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
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import ExpressLogo from './assets/tech_logo/express.png';
import angularLogo from './assets/tech_logo/angular.png';
import Net from './assets/tech_logo/net.png';


// Experience Section Logo's
import shiwansLogo from './assets/company_logo/shiwans_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import iessLogo from './assets/education_logo/iess_logo.png';
import mpuLogo from './assets/education_logo/mpu_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import csprepLogo from './assets/work_logo/cs_prep.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import ssLogo from './assets/work_logo/ss.png';
import poratalLogo from './assets/work_logo/poratal.png';
impo

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
      {name: 'angular', logo: angularLogo},
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Express JS', logo: ExpressLogo },
      { name: 'csharp', logo: csharpLogo },
      { name: '.Net', logo: Net },
    ],
  },
  {
    title: 'Languages',
    skills: [
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
      role: "Software Developer",
      company: "Shiwansh Solutions",
      date: "January 2025 - Present",
      desc: "Worked with MongoDB for designing and optimizing database schemas. Implemented reusable UI components to improve development speed and maintainability. Optimized application performance and ensured cross-browser compatibility.  Contributed to deployment and hosting workflows using Netlify and other cloud platforms. Actively collaborated with senior developers to learn and implement industry best practices. Continuously improving skills in MERN stack and exploring modern libraries & tools for full-stack development.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Express JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        ". Net",
        "C#",
        "SQL",
        "Git",
        "GitHub",
        "VS Code",
        "Netlify",

        
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
      title: " Employee Management System",
      description:
      " Created a full-stack web service to manage employees, job candidates, and interview processes with role-based user access and secured user authentication.  Working with React.js, Node.js, Express.js, and MongoDB, state management utilizing Zustand, and authentication using JWT. The integrated  module contains a dashboard, candidate tracking,  follow-ups, and scheduling of interviews.",
      image: ssLogo,
      tags: [" React.js", "Node.js", "Express.js", "MongoDB", "API","JavaScript (ES6+)","CSS3","HTML5"],
      github: "https://github.com/shivam-prajapati-1/Employee-Management-System",
      // webapp: "https://shiwansh.com/",
    },
     {
      id: 1,
      title: " Education Porttal",
      description:
        " They highlight career opportunities with professional development, building a knowledge-based economy, and working with skilled staff. They support education sectors from early education, schools, to higher ed with inclusive policies and services.",
      image: poratalLogo,
      tags: [" React.js", "Node.js", "Express.js", "MongoDB", "API","JavaScript (ES6+)","CSS3","HTML5"],
      github: "https://github.com/shivam-prajapati-1/ADEK-Education-Portal",
      webapp: "https://www.adek.gov.ae/",
    },
    {
      id: 2,
      title: "Shiwansh.com",
      description:
          "Developed the official website for Shiwansh Solutions with a fully responsive UI, modern layout, and dynamic content sections. Implemented optimized performance, clean navigation, mobile-friendly design, and multiple custom features to enhance user experience and brand presence.",
       image: sspLogo,
      tags: [" React.js", " .NET Core", " Entity Framework", "Dapper", "API","SQL Server"],
      github: "https://github.com/shivam-prajapati-1/Aerospace-Employee-Payroll-System",
      webapp: "https://shiwansh.com/",
    },
    {
      id: 3,
      title: "Real-Estate-website",
      description:
        "A full-stack quiz-based platform designed for Real state house  .",
      image: csprepLogo,
      tags: ["React JS",  "HTML", "CSS", "JavaScript"],
      github: "https://github.com/shivam-prajapati-1/Real-Estate-website-React.js",
      webapp: "https://real-state-project-1.netlify.app/",
    },
   
    {
      id: 4,
      title: "shopsy-ecommerce-app",
      description:
        "Shopsy is an e-commerce web app built with React, featuring product listing, search, cart, and checkout functionalities. It offers a clean UI and seamless shopping experience for users.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://shopsy-ecommerce-app.netlify.app/#",
    },
    {
      id: 5,
      title: "Virtualr-main",
      description:
        "Virtual Maintainer is a web application designed to manage and monitor virtual tasks efficiently. Built with React, it helps users organize, track, and maintain digital operations through an intuitive and responsive interface.",
      image: taskremLogo,
      tags: ["JavaScript", "React js", "HTML", "CSS"],
      github: "https://github.com/shivam-prajapati-1/Virtualr-main",
      webapp: "https://virtual-main-pp.netlify.app/",
    },
   
   
  ];  