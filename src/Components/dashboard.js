import React from 'react';
import Navbar from './Navbar';
import JobCards from './JobCards';
import './dashboard.css'; // Ensure that dashboard CSS is applied correctly
import Styles from'./dashboard.module.css';

const Dashboard = () => {
  return (
    
    
     
   <div className={Styles.background}>
     
      <Navbar /> 

        <JobCards />
       
        </div>
  );
};

export default Dashboard;
