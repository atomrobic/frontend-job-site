import React from "react";
import "./blog.css"; // Create a separate CSS file for styling
import Navbar from './Navbar';
import MainContent from './Blogs/MainContent';
import styles from "./background.module.css";

const BlogContainer = () => {
  return (
    <>
      <div className={styles.backgroundContainer}>
          <Navbar />
        

        {/* Additional div added */}
          <MainContent />
          <MainContent />
          <MainContent />

         </div>
        
    </>
  );
};

export default BlogContainer;
