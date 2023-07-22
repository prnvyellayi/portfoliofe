import React from "react";
import styles from "../css/hello.module.css";
import profilepic from "../images/profile.jpeg";
import { Link as Linkrouter } from "react-router-dom";
import pdfBase64 from "../util";
import { Button } from "@react-email/button";
import ScrollAnimation from "react-animate-on-scroll";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import "animate.css";

const Hello = () => {
  const downloadPDF = () => {
    // console.log("the file getting downloaded");
    const linkSource = `data:application/pdf;base64,${pdfBase64}`;
    const downloadLink = document.createElement("a");
    const fileName = `pranav_yellayi_resume.pdf`;

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  const handlescroll = () => {
    window.scroll({
      top: 723,
      behavior: 'smooth'
    })
  }

  const SocialIconsDiv = () => {
    return (
      <div className={styles.social}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/pranav-shanmukh-yellayi-495145198/"
        >
          <AiFillLinkedin color="#4db5ff" className={styles.icon1} />
        </a>
        <a target="_blank" href="https://github.com/prnvyellayi">
          <AiFillGithub color="#4db5ff" className={styles.icon2} />
        </a>
        <a target="_blank" href="https://www.instagram.com/_.psy_fi._/">
          <AiFillInstagram color="#4db5ff" className={styles.icon3} />
        </a>
        <div className={styles.linesocial}></div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.anidiv}>
          <div className={styles.exp}>
            <Linkrouter to="/experience" className={styles.expspan}>
              Work
            </Linkrouter>
          </div>
          <SocialIconsDiv />
        </div>
        <ScrollAnimation
          className={styles.hellodiv}
          animateIn="animate__fadeIn"
        >
          <span className={styles.hey}>Hey there! I'm,</span>
          <span className={styles.name}>Pranav Shanmukh Yellayi</span>
          <span className={styles.dev}>Full Stack Software Developer</span>
          <div className={styles.buttondiv}>
            <button onClick={downloadPDF} className={styles.button}>
              My Resume
            </button>
            <button onClick={handlescroll} className={styles.button}>
              Talk to Me!
            </button>
          </div>
          <Linkrouter to="/about">
            <img src={profilepic} className={styles.image}></img>
          </Linkrouter>
          <span style={{ color: "#4db5ff" }}>About Me!</span>
        </ScrollAnimation>
        <div className={styles.anidiv}>
          <div className={styles.contact}>
            <div className={styles.linesocial}></div>
            <Button
              href="mailto:prnvshanmukh00@gmail.com"
              className={styles.contactspan}
            >
              Contact me
            </Button>
          </div>
          <div className={styles.skills}>
            <Linkrouter to="/skills" className={styles.skillspan}>
              Skills
            </Linkrouter>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hello;
