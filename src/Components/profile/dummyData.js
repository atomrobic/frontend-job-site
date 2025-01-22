// Dummy data for user profile, skills, and projects

export const userData = {
  profileImage: "https://via.placeholder.com/150", // Placeholder profile image
  name: "John Doe",
  email: "johndoe@example.com",
  location: "Goa, India",
  profession: "Full Stack Developer",
  linkedin: "https://www.linkedin.com/in/johndoe/",
  github: "https://github.com/johndoe",
};

export const skillsData = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "React" },
  { id: 5, name: "Node.js" },
  { id: 6, name: "Django" },
  { id: 7, name: "Bootstrap" },
  { id: 8, name: "FastAPI" },
  { id: 9, name: "Git" },
];

export const projectsData = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects and skills.",
    thumbnail: "https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1673636348356?e=1743033600&v=beta&t=gjFSfLA1APcGS9LKEcfhofYNZVL5htPSD-HiuaQWHZE ",
    link: "https://portfolio.johndoe.com",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description: "An online shopping platform built using Django and React.",
    thumbnail: "https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1673636348356?e=1743033600&v=beta&t=gjFSfLA1APcGS9LKEcfhofYNZVL5htPSD-HiuaQWHZE",
    link: "https://ecommerce.johndoe.com",
  },
  {
    id: 3,
    name: "OTT Platform",
    description: "A platform for streaming over-the-top media content.",
    thumbnail:"",
    link: "https://ott.johndoe.com",
  },
  {
    id: 4,
    name: "Weight Tracker",
    description: "A weight management application to track and analyze health data.",
    thumbnail: "",
    link: "https://weighttracker.johndoe.com",
  },
  {
    id: 5,
    name: "URL Shortener",
    description: "A simple URL shortener built with React and Node.js.",
    thumbnail: "",
    link: "https://shorten.johndoe.com",
  },
];
