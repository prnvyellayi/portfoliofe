import React, { useCallback } from "react";
import styles from "../css/experience.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import options from "../config/particlejs-config.json";
import { Link } from "react-router-dom";
import { EffectCards, Pagination, Keyboard } from "swiper/modules";

const Experience = () => {
  const particlesInit = async (main) => {
    console.log(main);
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

  const projects = [
    {
      title: "CHAT MATE",
      content:
        "Built a chat app using Next.js and Node.js, where users can join rooms to chat with the people in it ",
      link: "https://prnvyellayi-chatmate.vercel.app/",
      hash: ["#Next.js", "#Node.js", "#JavaScript", "#HTML", "#CSS"],
    },
    {
      title: "NirogGyan Brochure",
      content:
        "Created a static website (company brochure) from scratch using React.js and it's libraries",
      link: "https://www.brochure.niroggyan.com/",
      hash: ["#React.js", "#JavaScript", "#HTML", "#CSS"],
    },
    {
      title: "Store",
      content:
        "Created a Store web-app Mobile version to shop any clothing using React.js and it's libraries",
      link: "https://zag-store-prnvyellayi.netlify.app/",
      hash: ["#React.js", "#JavaScrpt", "#HTML", "#CSS"],
    },
    {
      title: "Influencer Dashboard",
      content:
        "Developed a responisve dashboard web-app with a functioning login to show the influencer data using React.js and it's libraries",
      link: "https://listed-fans-assignment-prnvyellayi.netlify.app/",
      hash: ["#React.js", "#JavaScrpt", "#HTML", "#CSS"],
    },
    {
      title: "PDF Parser",
      content:
        "Coded complex logics to Parse health reports to produce Smart Reports, using Node modules",
      link: "",
      hash: ["#Node.js", "#JavaScript"],
    },
    {
      title: "Minesweeper",
      content:
        "Built a console based Minesweeper game, takes x and y values of a box to be opened",
      link: "",
      hash: ["#javascript"],
    }
  ];

  return (
    <>
      <Link className={styles.back} to="/">
        <BiArrowBack size={35} color="#4db5ff" />
      </Link>
      <span className={styles.bgspan}>WORK</span>
      <SocialIconsDiv />
      <div className={styles.main}>
        <ScrollAnimation
          animateIn="animate__fadeIn"
          delay={1}
          className={styles.leftdiv}
        >
          <div className={styles.expdiv}>
            <span className={styles.titleexp}>Work Experience</span>
            <span className={styles.contentexp}>
              I have worked as a Software Developer intern under 2 companies,
              both of them being startups.
              <br />
              <br /> I integrated numberous APIs and devloped various websites,
              even from scratch, to help these companies achieve greater
              heights.
              <br />
              <br /> I used numerous node modules and react libraries to achieve
              seamless data transfer and build beatiful websites.
            </span>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeIn"
          delay={1}
          className={styles.rightdiv}
        >
          <Swiper
            effect={"cards"}
            grabCursor={true}
            // centeredSlides={true}
            loop={true}
            cardsEffect={{
              perSlideRotate: 5,
              perSlideOffset: 10,
              slideShadows: false,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            keyboard={{ enabled: true, onlyInViewport: true }}
            modules={[EffectCards, Pagination, Keyboard]}
            className={`mySwiper ${styles.swiperdiv}`}
          >
            {projects.map((each) => {
              return (
                <SwiperSlide style={{width: "100%"}}>
                  <a target="_blank" href={each.link} style={{textDecoration: "none", width: "100%"}}>
                    <div className={styles.slidediv}>
                      <span className={styles.title}>{each.title}</span>
                      <span className={styles.content}>{each.content}</span>
                      <hr className={styles.hr} />
                      <div className={styles.tagdiv}>
                        {each.hash.map((tag) => {
                          return <span className={styles.tagspan}>{tag}</span>;
                        })}
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
            <div className="slide-controller" style={{ paddingTop: "40px" }}>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </ScrollAnimation>
      </div>
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </>
  );
};

export default Experience;
