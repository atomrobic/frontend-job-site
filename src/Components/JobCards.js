import React, { useState } from "react";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./jobcard.css";

const JobCard = ({ title, company, jobType, location, isBookmarked, onBookmarkToggle }) => {
  return (
    <div className="card job mb-2">
      <div className="card-body">
        <div className="row">
          <div className="col-9">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle text-muted">{company}</h6>
            <p className="text-muted">{jobType}</p>
            <p className="text-dark">{location}</p>
          </div>
          <div className="saved-icons">
            <FontAwesomeIcon
              icon={isBookmarked ? solidBookmark : regularBookmark}
              className="fa-2x"
              onClick={onBookmarkToggle}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const JobDashboard = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Software Engineer, Android",
      company: "Google",
      jobType: "Full-Time",
      location: "Mountain View, CA",
      isBookmarked: false,
    },
    {
      id: 2,
      title: "Front-End Developer",
      company: "Derivatives Ltd.",
      jobType: "Part-Time",
      location: "San Francisco, CA",
      isBookmarked: false,
    },
    {
      id: 3,
      title: "React Native Developer",
      company: "Anbiya Technologies",
      jobType: "Remote",
      location: "Remote",
      isBookmarked: false,
    },
  ]);

  const [filter, setFilter] = useState({ jobType: "", jobName: "" });
  const [activeTab, setActiveTab] = useState("all");

  const toggleBookmark = (id) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id ? { ...job, isBookmarked: !job.isBookmarked } : job
      )
    );
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.jobType.toLowerCase().includes(filter.jobType.toLowerCase()) &&
      job.title.toLowerCase().includes(filter.jobName.toLowerCase())
  );

  const savedJobs = jobs.filter((job) => job.isBookmarked);

  const displayedJobs = activeTab === "all" ? filteredJobs : savedJobs;

  return (
    <div className="container border border-dark rounded shadow">
      <div id="main-content">
        <div className="p-3">
          {/* Navigation */}
          <nav className="nav bg-dark nav-pills nav-justified mb-3">
            <a
              href="www.google.com"
              className={`nav-item nav-link ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All Jobs
            </a>
            <a
              href="www.google.com"
              className={`nav-item nav-link ${activeTab === "saved" ? "active" : ""}`}
              onClick={() => setActiveTab("saved")}
            >
              Saved Jobs
            </a>
          </nav>

          {/* Filter Section */}
          {activeTab === "all" && (
            <div className="filters">
              <input
                type="text"
                className="form-control mb-2"
                name="jobName"
                placeholder="Filter by Job Name"
                value={filter.jobName}
                onChange={handleFilterChange}
              />
              <select
                className="form-control"
                name="jobType"
                value={filter.jobType}
                onChange={handleFilterChange}
              >
                <option value="">Filter by Job Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
          )}

          {/* Job Cards */}
          <div className="jobs mt-2">
            {displayedJobs.length > 0 ? (
              displayedJobs.map((job) => (
                <JobCard
                  key={job.id}
                  title={job.title}
                  company={job.company}
                  jobType={job.jobType}
                  location={job.location}
                  isBookmarked={job.isBookmarked}
                  onBookmarkToggle={() => toggleBookmark(job.id)}
                />
              ))
            ) : (
              <p className="text-center">
                {activeTab === "all" ? "No jobs found." : "No saved jobs yet."}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDashboard;
