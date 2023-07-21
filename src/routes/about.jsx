import React, {useCallback} from "react";
import styles from "../css/about.module.css";
import profilepic from "../images/profile.jpeg";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import options from "../config/home-config.json";
import { Link } from "react-router-dom";


const About = () => {
  const particlesInit = useCallback(async (main) => {
    console.log(main);
    await loadFull(main);
  },[]);
  return (
    <>
      <span className={styles.bgspan}>ABOUT</span>
      <div className={styles.main}>
        <div className={styles.content}>
          <p className={styles.para}>
            I'm a Full-Stack MERN developer who is eager to try many new things
            to upgrade his skills.
          </p>

          <p className={styles.para}>
            I love to bring beautiful designs to life with my skills. I am a
            dedicated worker and I keep solid priority towards work.
          </p>

          <p className={styles.para}>
            I am a sports enthusiast and a Cricket player, keen to try out any
            new sport that I possibly can.
          </p>
          <span></span>
        </div>
        <Link className={styles.imagediv} to='/'>
          <img src={profilepic} className={styles.image}></img>
        </Link>
      </div>
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </>
  );
};

export default About;
