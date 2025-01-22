import React from "react";
import Navbar from "./Navbar";
import './Blogdetails.css';

const Blogdetails = ({
  title,
  date,
  createdBy,
  description,
  tags,
  image,
}) => {
  return (
    <div className="bg-black text-light rounded-lg shadow-lg p-1 mb-6">
      <div className="mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      <div className="mb-4 text-light">
        <h2 className="text-2xl font-bold mb-2 ">{title}</h2>
        <p className="text-light-900  text-sm mb-1">{date}</p>
        <p className="text-gray-200 text-sm">Created by: {createdBy}</p>
      </div>
      <p className="mb-4 text-light">{description}</p>
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const Blogd = () => {
  const blogData = [
    {
      title: "React Basics",
      date: "January 21, 2025",
      createdBy: "Akhil",
      description: "Learn the fundamentals of React, including components, state, and props.",
      tags: ["React", "JavaScript", "Web Development"],
      image: "https://www.animalhumanesociety.org/sites/default/files/styles/scale_width_960/public/media/image/2022-06/kitten-season_1200w.jpg?itok=I2zyN5_1",
    },
   
  ];

  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen p-4">
        {/* Blog Section with Grid */}
        <div className="grid grid-cols-4 gap-6">
          {/* Blog Cards Section (spanning 3 columns) */}
          <div className="col-span-4 md:col-span-3">
            {blogData.map((blog, index) => (
              <Blogdetails key={index} {...blog} />
            ))}
          </div>

          {/* Sidebar Section (spanning 1 column) */}
         {/* Sidebar Section (spanning 1 column) */}
<aside className="col-span-4 md:col-span-1 shadow-lg p-4 rounded-lg h-fit border border-white-700 bg-gray-200 ">
  <h3 className="text-xl font-bold mb-5 text-white-800">Trending</h3>
  <ul className="space-y-4">
    <li className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition duration-200">
      React Basics
    </li>
    <li className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition duration-200">
      CSS Media Queries
    </li>
    <li className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition duration-200">
      JavaScript Tips
    </li>
    <li className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer transition duration-200">
      Responsive Design
    </li>
  </ul>
</aside>

        </div>
      </div>
    </>
  );
};

export default Blogd;
