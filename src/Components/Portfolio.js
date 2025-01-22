import React, { useState } from "react";
import "./portfolio.css"; // Additional styling
import { userData, skillsData, projectsData } from "./profile/dummyData"; // Dummy data
import Navbar from "./Navbar"; // Navigation bar component
import styles from "./background.module.css"; // Background styles

//profile dummy data profile folderil


const Portfolio = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className={styles.backgroundContainer}>
      <div className="portfolio-container">
        <Navbar />
        <div className="md:flex">
          {/* Profile Section */}
          <div className="lg:w-1/4 md:w-1/3 md:px-3">
            <div className="profile-card p-6 rounded-md shadow ">
              <div className="profile-pic text-center mb-5">
                <input
                  id="pro-img"
                  name="profile-image"
                  type="file"
                  className="hidden"
                  onChange={handleProfileImageChange}
                />
                <div>
                  <div className="relative h-28 w-28 mx-auto">
                    <img
                      src={profileImage || userData.profileImage}
                      className="profile-img rounded-full border-2 border-gray-300"
                      alt=""
                    />
                    <label
                      className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black bg-opacity-50 rounded-full"
                      htmlFor="pro-img"
                    >
                      <i className="fas fa-user text-white text-3xl"></i>
                    </label>
                  </div>
                  <div className="mt-4">
                    <h5 className="text-lg font-semibold flex items-center justify-center">
                      <i className="fas fa-user-circle text-slate-400 mr-2"></i>
                      {userData.name}
                    </h5>
                    <p className="text-slate-400 flex items-center">
                      <i className="fas fa-envelope text-slate-400 mr-2"></i>
                      {userData.email}
                    </p>
                    <p className="text-slate-400 flex items-center">
                      <i className="fas fa-map-marker-alt text-slate-400 mr-2"></i>
                      {userData.location}
                    </p>
                    <p className="text-slate-400 flex items-center">
                      <i className="fas fa-briefcase text-slate-400 mr-2"></i>
                      {userData.profession}
                    </p>
                  </div>
                  <div className="flex justify-center mt-4 space-x-4">
                    <a
                      href={userData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                    <a
                      href={userData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-gray-900 text-white"
                    >
                      <i className="fab fa-github text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
<div className="lg:w-3/4 md:w-3/3">
  <section id="skills" className="skills-section mt-5">
    <h2 className="section-title text-2xl font-bold mb-6">Skills</h2>
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 list-none">
      {skillsData.map((skill) => (
        <li
          key={skill.id}
          className="skill-card  rounded-lg shadow-md flex flex-col"
        >
          <p className="text-center font-semibold text-gray-800">
            {skill.name}
          </p>
        </li>
      ))}
    </ul>
  </section>


            {/* Projects Section */}
            <section id="projects" className="projects-section ">
              <h2 className="section-title text-2xl font-bold mb-6">Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project) => (
                  <div
                    key={project.id}
                    className="project-card  p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                  src={project.thumbnail || "https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1673636348356?e=1743033600&v=beta&t=gjFSfLA1APcGS9LKEcfhofYNZVL5htPSD-HiuaQWHZE "} // Default placeholder image
               alt={project.name || "Default Project Name"} // Default alt text
             className="project-img w-full h-48 object-fill rounded-md mb-4"
                />

   
                    <h3 className="font-semibold text-lg mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      View Project
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-section ">
              <h2 className="section-title text-2xl font-bold mb-6">Contact</h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="form-label block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <button
                  type="submit"
                  className="submit-btn bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Portfolio;
