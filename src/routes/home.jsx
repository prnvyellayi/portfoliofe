import React from "react";
import ChatGPT from "../components/chatGPT";
import styles from "../css/App.module.css";
import Character from "./walking";

const Home = () => {
  return (
    <div className={styles.App}>
      <Character />
      <ChatGPT />
    </div> 
  );
};

export default Home;
