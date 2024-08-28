import {
  aircrackng,
  aws,
  backend,
  blender,
  cinema4d,
  cisco,
  connectwise,
  cplusplus,
  fullstack,
  git,
  html,
  hydra,
  java,
  javascript,
  johntheripper,
  kalilinux,
  metasploit,
  mobile,
  nmap,
  node_js,
  photoshop,
  powershell,
  premiere,
  python,
  reactjs,
  tailwind,
  ubuntu,
  virtualbox,
  web,
  wireshark
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const education = [
  {
    title: "BS, Computer Science | Minor, Applied Mathematics",
    company_name: "Purdue University ",
    icon: "https://media.licdn.com/dms/image/v2/C4E0BAQGUO9Kvy1lfEA/company-logo_200_200/company-logo_200_200/0/1630626191299/purdue_university_logo?e=1732752000&v=beta&t=q8sgRJU5FYBXa_sFb64cEz2t7oVMjMs-ISWkWMRnkAQ",
    iconBg: "#000",
    date: "2021 - 2025",
    points: [
      "Coursework: Programming in C, Data Structures And Algorithms, Systems Programming, Problem Solving And Object-Oriented Programming, Foundations of Computer Science, Computer Networks, Information Systems, Python Programming, Discrete Mathematics, Real Analysis",
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
  {
    name: "NodeJS",
    icon: node_js,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
  {
    name: "ConnectWise",
    icon: connectwise,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
  {
    name: "Metasploit",
    icon: metasploit,
  },
  {
    name: "John the Ripper",
    icon: johntheripper,
  },
  {
    name: "Hydra",
    icon: hydra,
  },
  {
    name: "Aircrack-ng",
    icon: aircrackng,
  },
];

const designTools = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Cinema 4D",
    icon: cinema4d,
  },
  {
    name: "Blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "PURDUE ASSOCIATION FOR COMPUTING MACHINERY CLUB",
    company_name: "West Lafayette, IN",
    icon: "https://media.licdn.com/dms/image/v2/C4E0BAQGUO9Kvy1lfEA/company-logo_200_200/company-logo_200_200/0/1630626191299/purdue_university_logo?e=1732752000&v=beta&t=q8sgRJU5FYBXa_sFb64cEz2t7oVMjMs-ISWkWMRnkAQ",
    iconBg: "#000",
    date: "Oct 2022 - Present",
    points: [
      "Industry Exposure & Networking: Participate in tech talks, hackathons, and events sponsored by leading companies, providing members with direct access to corporate recruiters and networking opportunities within the tech industry.",
      " Collaborative Learning Environment: Join Special Interest Groups (SIGs) to collaborate with peers on cutting-edge projects, attend weekly meetings, and contribute to pioneering solutions in areas like scalable cloud backends, robotics operating systems, and game development",
    ],
  },
];

const extracurricular = [
 
];

const projects = [
  {
    name: "Java Client-Server Application",
    description: `Developed a Java-based client-server system for a simulated marketplace, handling user authentication, shopping cart management, and
transactions.
 Utilized socket programming for communication between multiple clients and the server, with persistent data storage in a text file.
 Enabled concurrent client operations and tested functionality using IntelliJ and command-line tools.`,
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
    ],
    image: "./Java-client.jpg",
    source_code_link: "https://github.com/calebsun241/client-server-store",
    live_project_link: "https://github.com/calebsun241/client-server-store",
  },
  {
    name: "Node.js Terminal Chatbot",
    description: `Developed a terminal-based chatbot using Node.js that integrates with the OpenAI API for real-time conversational capabilities.
Implemented API interaction to manage chat history, enabling context-aware responses from the GPT-3.5 model.
Utilized environment variables for secure API key management and streamlined deployment with npm for dependency management and
script execution.`,
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Open AI",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
    ],
    image: "./Node-js.png",
    source_code_link: "https://github.com/calebsun241/chatbot",
    live_project_link: "https://github.com/calebsun241/chatbot",
  },
  {
    name: "Real-Time Sign language Detector",
    description: `Developed a real-time Sign Language Detection system using Python, OpenCV, and Mediapipe for hand gesture recognition.
Trained a Random Forest Classifier on extracted hand landmark features to classify sign language alphabets with over 90% accuracy.
Integrated the model into a live video feed for real-time detection and prediction of sign language gestures.`,
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "Mediapipe",
        color: "pink-text-gradient",
      },
    ],
    image: "./real-time.png",
    source_code_link: "https://github.com/calebsun241/sign-language-detect",
    live_project_link: "https://github.com/calebsun241/sign-language-detect",
  },
];

const testimonials = [

];

export {
  cybersecurityTools,
  designTools, education, experiences,
  extracurricular, itTools, projects, services,
  technologies, testimonials
};

