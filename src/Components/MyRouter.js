import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Components/Login.js";
import Signup from "../Components/Signup.js";
import Dashboard from '../Components/dashboard.js'; // Match the exact file name
import JobCards from "../Components/JobCards.js";
import Blog from "../Components/Blog.js";
import MainContent from "../Components/Blogs/MainContent.js"; // Corrected path
import Portfolio  from '../Components/Portfolio.js';
import JobcardViews from'../Components/JobcardViews.js';
import Blogdetails from '../Components/Blogdetails.js';
import Footer from './Footer.js';
import AdminDashboard from "../Components/AdminDashboard.js";

const AppRouter = () => {
  return (
    <Router>
      {/* Navbar appears on every page */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobcards" element={<JobCards />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/maincontent" element={<MainContent />} />
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/JobcardViews" element={<JobcardViews/>}/>
        <Route path="/Blogdetails" element={<Blogdetails/>}/>
        <Route path="/Footer" element={<Footer/>}/>
        <Route path="/AdminDashboard"element={<AdminDashboard/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
