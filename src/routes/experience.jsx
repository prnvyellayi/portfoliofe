import React, { useCallback } from "react";
import styles from "../css/experience.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import options from "../config/particlejs-config.json";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
} from "swiper/modules";

const Experience = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const SocialIconsDiv = () => {
    return (
      <div className={styles.social}>
        <a target="_blank" href="https://www.linkedin.com/in/pranav-shanmukh-yellayi-495145198/">
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
      title: "NirogGyan Brochure",
      content: 
        "Created a static website (company brochure) from scratch using React.js and it's libraries",
      hash: ["#React.js", "#JavaScript", "#HTML", "#CSS"],
    },
    {
      title: "PDF Parser",
      content:
        "Coded complex logics to Parse health reports to produce Smart Reports, using Node modules",
      hash: ["#Node.js", "#JavaScript"],
    },
    {
      title: "Minesweeper",
      content:
        "Built a console based Minesweeper game, takes x and y values of a box to be opened",
      hash: ["#javascript"],
    },
    {
      title: "Store",
      content:
        "Created a Store web-app to shop any clothing using React.js and it's libraries",
      hash: ["#React.js", "#JavaScrpt", "#HTML", "#CSS"],
    },
  ];

  return (
    <>
      <span className={styles.bgspan}>Work</span>
      <SocialIconsDiv />
      <div className={styles.main}>
        <ScrollAnimation
          animateIn="animate__fadeIn"
          delay={1}
          style={{ width: "100%" }}
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            keyboard={{ enabled: true, onlyInViewport: true }}
            modules={[EffectCoverflow, Pagination, Navigation, Keyboard]}
            className={`swiper_container ${styles.swiperdiv}`}
          >
            {projects.map((each) => {
              return (
                <SwiperSlide style={{ width: "330px", borderRadius: "30px" }}>
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
                </SwiperSlide>
              );
            })}
            <div className="slide-controller" style={{ paddingTop: "40px" }}>
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
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
