import React from "react";
import styles from '../css/about.module.css'
import profilepic from "../images/profile.jpeg";

const About = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.content}>
            
        </div>
        <div className={styles.imagediv}>
            <img src={profilepic} className={styles.image}></img>
        </div>
      </div>
    </>
  );
};

export default About;
