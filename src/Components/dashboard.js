import React from 'react';
import Navbar from './Navbar';
import JobCards from './JobCards';
import './dashboard.css'; // Ensure that dashboard CSS is applied correctly
import Styles from'./dashboard.module.css';
import Footer from'./Footer';
const Dashboard = () => {
  return (
    
    
     
   <div className={Styles.background}>
     
      <Navbar /> 

        <JobCards />
       <Footer/>
        </div>
  );
};

export default Dashboard;
