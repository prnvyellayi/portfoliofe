import React, { useRef } from "react";
import styles from "../css/skills.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import options from "../config/gpt-config.json";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import { Link } from "react-router-dom";
import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoJavascript,
  BiSolidFileCss,
  BiCodeCurly,
  BiArrowBack,
} from "react-icons/bi";

const Skills = () => {
  const skills = [
    {
      title: "Javascript",
      content:
        "Working with JS as my main programming language for the majority of my coding experience",
    },
    {
      title: "React.js",
      content:
        "Been extensively using React and its libraries to render beautiful websites",
    },
    {
      title: "Node.js",
      content:
        "Building runtime environment for server-side JavaScript development using Node and express.js",
    },
    {
      title: "HTML/CSS",
      content:
        "Sharpened my skills in styling both static and dynamic webpages using HTML/CSS",
    },
    {
      title: "C language",
      content: "Started off my coding career by Competing extensively in C",
    },
  ];

  const getIcon = (title) => {
    switch (title) {
      case "Javascript":
        return <BiLogoJavascript size={35} />;
        break;
      case "React.js":
        return <BiLogoReact size={35} />;
        break;
      case "Node.js":
        return <BiLogoNodejs size={35} />;
        break;
      case "HTML/CSS":
        return <BiSolidFileCss size={35} />;
        break;
      case "C language":
        return <BiCodeCurly size={35} />;
        break;
      default:
        break;
    }
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

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

  const scrollref = useRef(null);

  const onWheel = (e) => {
    var container = scrollref.current;
    var containerScrollPosition =
      document.getElementById("container").scrollLeft;
    if (container) {
      if (e.deltaY == 0) return;
      container.scrollTo({
        left: containerScrollPosition + e.deltaY,
        behaviour: "smooth",
      });
    }
  };

  return (
    <>
      <div className={styles.main}>
        <Link className={styles.back} to="/">
          <BiArrowBack size={35} color="#4db5ff" />
        </Link>
        <span className={styles.bgspan}>SKILLS</span>
        <SocialIconsDiv />
        <div
          ref={scrollref}
          className={styles.slideshow}
          onWheel={(e) => onWheel(e)}
          id="container"
        >
          {skills.map((each, index) => {
            return (
              <ScrollAnimation
                className={styles.skilldiv}
                animateIn="animate__backInDown"
                delay={`${index * 400}`}
                duration={0.5}
              >
                <span className={styles.title}>
                  {each.title}
                  {getIcon(each.title)}
                </span>
                <hr className={styles.hr}></hr>
                <span className={styles.content}>{each.content}</span>
              </ScrollAnimation>
            );
          })}
        </div>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
            className={styles.particle}
          />
      </div>
    </>
  );
};

export default Skills;
