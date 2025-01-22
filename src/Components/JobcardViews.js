import React from "react";
import Navbar from "./Navbar";
import Styles from'./dashboard.module.css';
const JobCard = ({
  title,
  companyName,
  location,
  roleType,
  duration,
  salary,
  postedDate,
  summary,
  skills,
  glassdoorLink,
  glassdoorRating,
}) => {
  return (
    <div className="bg-black text-white rounded-lg shadow-lg p-15 mb-6">
      <div className="flex justify-between items-center ">
        <div className="text-xl font-bold">{title}</div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">{companyName}</div>
      </div>
      <div className="flex flex-wrap gap-4 mb-4 text-sm">
        <p className="flex items-center">
          <i className="fas fa-upload mr-2"></i> {postedDate}
        </p>
      </div>
      {skills && (
  <div className="mb-8 p-6 bg-gray-900 rounded-lg">
  <h6 className="text-lg font-medium mb-4">Required Skills:</h6>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-4">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="skills bg-gray-800 p-1 rounded-md text-white text-center"
      >
        <span className="font-semibold">{skill.name}</span>
      </div>
    ))}
  </div>
</div>

)}

      <p className="mb-4">{summary}</p>
      <a
        href={glassdoorLink}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-green-600 text-white px-4 py-2 rounded-md uppercase font-semibold"
      >
        <i className="fas fa-door-open mr-2"></i> Apply
      </a>
    </div>
  );
};
const JobcardViews = () => {
  const jobCardsData = [
    {
      title: "D365 Software Developer",
      companyName: "PEAK Technical Staffing USA",
      location: "Frisco, TX or Remote",
      roleType: "Contract",
      duration: "3 months",
      salary: "$50 per hour",
      postedDate: "2 days ago",
      summary:
        "IT Applications Developers III will lead the design, implementation, and support of internal applications. They are also responsible for maintaining the application as well as verifying the accuracy ...",
      glassdoorLink:
        "https://www.glassdoor.com/Overview/Working-at-PEAK-Technical-Staffing-USA-EI_IE260778.11,38.htm",
      glassdoorRating: "4.1",
      skills: [
        { name: "JavaScript", icon: "js-square", experience: "3 Years" },
        { name: "Vue.js", icon: "vuejs", experience: "3 Years" },
        { name: "CSS", icon: "css3-alt", experience: "5 Years" },
        { name: "CSS", icon: "css3-alt", experience: "5 Years" },
        { name: "CSS", icon: "css3-alt", experience: "5 Years" },
        { name: "CSS", icon: "css3-alt", experience: "5 Years" },



      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className={Styles.background}>

      <div className="container    gap-2 p-10">
        {jobCardsData.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
      </div>
    </>
  );
};

export default JobcardViews;
