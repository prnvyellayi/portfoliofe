/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";
import Particles from "react-particles";
import { Link } from "react-router-dom";
import { loadFull } from "tsparticles";
import options from "../config/home-config.json";
import styles from "../css/about.module.css";
import profilepic from "../images/profile.jpg";

const About = () => {
  const particlesInit = useCallback(async (main) => {
    console.log(main);
    await loadFull(main);
  }, []);
  return (
    <>
      <Link className={styles.back} to="/">
        <BiArrowBack size={35} color="#4db5ff" />
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
          <span></span>
        </div>
        <div className={styles.imagediv}>
          <Link to="/">
            <img src={profilepic} className={styles.image}></img>
          </Link>
        </div>
      </div>
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </>
  );
};

export default About;
