/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import Particles from "react-particles";
import { Link } from "react-router-dom";
import { loadFull } from "tsparticles";
import options from "../config/home-config.json";
import styles from "../css/about.module.css";
import profilepic from "../images/profile.jpg";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import pdfBase64 from "../util";

const About = () => {
  const particlesInit = useCallback(async (main) => {
    console.log(main);
    await loadFull(main);
  }, []);

  const downloadPDF = () => {
    // console.log("the file getting downloaded");
    const linkSource = `data:application/pdf;base64,${pdfBase64}`;
    const downloadLink = document.createElement("a");
    const fileName = `pranav_yellayi_resume.pdf`;

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  useEffect(() => {
    document.body.style.overflow = 'scroll'
  })

  const SocialIconsDiv = () => {
    return (
      <div className={styles.social}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/pranav-shanmukh-yellayi-495145198/"
          rel="noreferrer"
        >
          <AiFillLinkedin color="#8EFF35" className={styles.icon1} />
        </a>
        <a
          target="_blank"
          href="https://github.com/prnvyellayi"
          rel="noreferrer"
        >
          <AiFillGithub color="#8EFF35" className={styles.icon2} />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/_.psy_fi._/"
          rel="noreferrer"
        >
          <AiFillInstagram color="#8EFF35" className={styles.icon3} />
        </a>
        <a
          target="_blank"
          href="mailto:prnvshanmukh00@gmail.com"
          rel="noreferrer"
        >
          <IoIosMail color="#8EFF35" className={styles.icon4} />
        </a>
        <div className={styles.linesocial}></div>
      </div>
    );
  };

  return (
    <div>
      <Link className={styles.back} to="/">
        <BiArrowBack size={35} color="#8EFF35" />
      </Link>
      <span className={styles.bgspan}>ABOUT</span>
      <div className={styles.main}>
        <div className={styles.content}>
          <p className={styles.para}>
            I'm a Full-Stack MERN developer, eager to try any new thing, which I
            can get my hands on to upgrade my skills.
          </p>

          <p className={styles.para}>
            I love to bring beautiful designs to life with my skills. I am a
            dedicated worker and I keep solid priority towards my work.
          </p>

          <p className={styles.para}>
            I am a sports enthusiast and a Cricket player, keen to try out any
            new sport that I possibly can. I also am an avid music listener.
          </p>
          <SocialIconsDiv />
        </div>
        <div className={styles.imagediv}>
          <Link to="/">
            <img src={profilepic} className={styles.image}></img>
          </Link>
          <button onClick={downloadPDF} className={styles.button}>
            My Resume
          </button>
        </div>
      </div>
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </div>
  );
};

export default About;
