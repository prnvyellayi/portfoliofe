/* eslint-disable jsx-a11y/alt-text */
import { Button } from "@react-email/button";
import "animate.css";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiLogoInstagram } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { PiGithubLogoLight } from "react-icons/pi";
import { RiLinkedinLine } from "react-icons/ri";
import { Link as Linkrouter } from "react-router-dom";
import styles from "../css/hello.module.css";
import profilepic from "../images/profile.jpg";
import pdfBase64 from "../util";

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

  const Footer = () => {
    return (
      <div className={styles.footer}>
        <Button href="mailto:prnvshanmukh00@gmail.com">
          <CiMail size={30} fill="white" className={styles.footericons} />
        </Button>
        <a
          target="_blank"
          href="https://github.com/prnvyellayi"
          rel="noreferrer"
        >
          <PiGithubLogoLight
            size={30}
            fill="white"
            className={styles.footericons}
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/pranav-shanmukh-yellayi-495145198/"
          rel="noreferrer"
        >
          <RiLinkedinLine
            size={30}
            fill="white"
            className={styles.footericons}
          />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/_.psy_fi._/"
          rel="noreferrer"
        >
          <BiLogoInstagram
            size={30}
            fill="white"
            className={styles.footericons}
          />
        </a>
      </div>
    );
  };

  const handlescroll = () => {
    window.scroll({
      top: 723,
      behavior: "smooth",
    });
  };

  const SocialIconsDiv = () => {
    return (
      <div className={styles.social}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/pranav-shanmukh-yellayi-495145198/"
          rel="noreferrer"
        >
          <AiFillLinkedin color="#4db5ff" className={styles.icon1} />
        </a>
        <a
          target="_blank"
          href="https://github.com/prnvyellayi"
          rel="noreferrer"
        >
          <AiFillGithub color="#4db5ff" className={styles.icon2} />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/_.psy_fi._/"
          rel="noreferrer"
        >
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
            <Linkrouter
              to="/experience"
              className={`${styles.expspan}  ${styles.underline}`}
            >
              Work
            </Linkrouter>
          </div>
          <SocialIconsDiv />
        </div>
        <ScrollAnimation
          className={styles.hellodiv}
          animateIn="animate__fadeIn"
          animateOnce={true}
        >
          <span className={styles.hey}>Hey there! I'm,</span>
          <span className={styles.name}>Pranav Yellayi</span>
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
              className={`${styles.contactspan} ${styles.underline}`}
            >
              Contact me
            </Button>
          </div>
          <div className={styles.skills}>
            <Linkrouter
              to="/skills"
              className={`${styles.skillspan} ${styles.underline}`}
            >
              Skills
            </Linkrouter>
          </div>
        </div>
        <ScrollAnimation
          className={styles.anidiv2}
          animateOnce={true}
          animateIn="animate__bounceInUp"
          duration={1.5}
        >
          <Linkrouter to="/experience" className={styles.smallspan}>
            Work
          </Linkrouter>
          <Linkrouter to="/skills" className={styles.smallspan}>
            Skills
          </Linkrouter>
        </ScrollAnimation>
        <Footer />
      </div>
    </>
  );
};

export default Hello;
