import React, { useCallback } from "react";
import ChatGPT from "../components/chatGPT";
import Hello from "../components/hello";
import styles from "../css/App.module.css";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import options from "../config/home-config.json";

const Home = () => {
  const particlesInit = useCallback(async (main) => {
    console.log(main);
    await loadFull(main);
  },[]);

  return (
    <div className={styles.App}>
      <Hello />
      <ChatGPT />
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </div>
  );
};

export default Home;
