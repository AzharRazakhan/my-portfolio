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
import expressLogo from './assets/tech_logo/express.png';
import angularLogo from './assets/tech_logo/angular.png';
import Net from './assets/tech_logo/net.png';
import typescript from './assets/tech_logo/typescript.png'



// Experience Section Logo's
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
import travelLogo from './assets/work_logo/travel.png';
import sspLogo from './assets/work_logo/ssp.png';
import emsLogo from './assets/work_logo/ems.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Angular', logo: angularLogo },
        {name: 'Typescript', logo: typescript},
        { name: 'Bootstrap', logo: bootstrapLogo },
        { name: 'React JS', logo: reactjsLogo },
        // { name: 'Redux', logo: reduxLogo },
      ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Express JS', logo: expressLogo },
      // { name: 'csharp', logo: csharpLogo },
      // { name: 'Net', logo: Net },
    ],
  },
  {
    title: 'Languages',
    skills: [
    /*   { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo }, */
      { name: 'JavaScript', logo: javascriptLogo },
        { name: 'Typescript', logo: typescript },
     
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
       id: 1,
       img: '',
        role: "Software Developer",
     company: "Thoughtwin IT Solution",
        duration: "Jan 2023 – Apr 2025",
       desc: "Delivered 10+ scalable modules using Angular 13 and Node.js, significantly improving maintainability and user experience. Reduced API response time by 25% through optimized backend logic and effective caching strategies. Built a custom design system using Angular Material and Bootstrap, which was successfully adopted across three major projects. Collaborated closely with backend teams to resolve over 100 bugs and streamline sprint delivery for smoother project execution.",
       skills: [
         "Angular",
         "Typescript",
          "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Express JS",
        "Tailwind CSS",
         "Bootstrap",
        "MongoDb",
        ". Net",
        "SQL",
        "Git",
        "GitHub",
        "VS Code",
        "Netlify",
       ],
     },
     {
       id: 2,
       img: '',
      role: "Angular Developer",
        company: "CDN Solutions Group",
       duration: "May 2022 - Nov 2022",
       desc: "Built reusable UI components in Angular 12 to streamline the user interface and improve development efficiency, while collaborating closely with backend developers to ensure seamless API integration across the application.",
       skills: [
          "Angular",
         "Typescript",
         "HTML",
         "CSS",
         "Javascript",
         "Bootstrap",
         "Material UI",
       ]
     },
  ];
  
export const education = [
  {
    id: 0,
    img: iessLogo,
    school: "RGPV University, Bhopal",
    date: "Sept 2015 - July 2019",
    desc: "Completed Bachelor of Engineering (Computer Science) from RGPV University, where I gained strong fundamentals in programming, data structures, algorithms, database management, and software development. Worked on academic projects that strengthened my understanding of real-world application development and enhanced my technical problem-solving skills.",
    degree: "B.E. Computer Science (CGPA: 6.3)",
  },
  {
    id: 1,
    img: mpuLogo,
    school: "Barfani Academy, Bhopal",
    date: "July 2014 - Mar 2015",
    grade: "60%",
    desc: "Completed Senior Secondary education with a focus on core subjects including Physics, Chemistry, and Mathematics. Built a strong analytical foundation and participated in academic activities that improved logical reasoning and problem-solving capabilities.",
    degree: "Higher Secondary (PCM)",
  },
 {
  id: 2,
  img: vpsLogo,
  school: "Rock Wood Higher Secondary School",
  date: "July 2011 - Mar 2012",
  grade: "63%",
  desc: "Completed High School (10th) from Rock Wood Higher Secondary School with 63%, building a strong foundation in core academic subjects and developing early interest in technology and problem-solving.",
  degree: "High School (10th)",
}
];
  
  export const projects = [
    {
  id: 0,
  title: "Enriched Academy – Education Platform",
  description:
    "Developed course management and user dashboards with secure REST API integration for authentication, progress tracking, and content delivery. Enhanced application performance by 20% using reusable Angular components, lazy loading, and optimized state handling.",
  image: emsLogo, 
  tags: ["Angular", "Node.js", "REST API", "TypeScript", "Bootstrap", "MongoDB"],
  github: "",
  webapp: "https://www.enrichedacademy.com/",
},

{
  id: 1,
  title: "MyReferral – Real Estate Referral Platform",
  description:
    "Designed and developed property listing and referral tracking modules with a fully responsive UI optimized across devices. Implemented secure backend communication and dynamic data handling in an Agile MEAN Stack setup.",
  image: travelLogo,
  tags: ["Angular", "Node.js", "Express.js", "MongoDB", "REST API", "TypeScript"],
  github: "",
  webapp: "",
},

{
  id: 2,
  title: "Perimi Admin Panel – Quiz Management System",
  description:
    "Built a scalable admin panel for managing quiz categories, scoring, and user results. Ensured a mobile-friendly UI with real-time data interaction powered by secure REST API integration.",
  image: npmLogo,
  tags: ["Angular", "Node.js", "Express.js", "REST API", "HTML5", "CSS3"],
  github: "",
  webapp: "",
},
  ];  