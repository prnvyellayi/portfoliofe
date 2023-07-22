import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "../css/chatgpt.module.css";
import { AiOutlineSend } from "react-icons/ai";
import profilepic from "../images/profile.jpeg";
import robot from "../images/robot_icon.png";
import chatbg from "../images/chatbg.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const ChatGPT = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (response != "") {
      let resp = { role: "assistant", content: response };
      let copyArr = [...messages];
      copyArr.splice(copyArr.length - 1, 1);
      setMessages([...copyArr, resp]);
    }
  }, [response]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    if (messages.length !== 0)
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let msg = { role: "user", content: prompt };
    setPrompt("");
    let resp = { role: "assistant", content: "Typing..." };
    setMessages([...messages, msg, resp]);
    await axios
      .post("https://portfolio-be-jnai.onrender.com/chat", { msg })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const messageRender = (role, content) => {
    return (
      <>
        {role === "user" ? (
          <>
            <div className={styles.messageboxuser}>{content}</div>
          </>
        ) : (
          <>
            <img
              src={profilepic}
              style={{ width: "27px", height: "27px", borderRadius: "50%" }}
            />
            <div className={styles.messageboxass}>{content}</div>
          </>
        )}
      </>
    );
  };

  return (
    <>
      <div id="#gpt" className={styles.outerdiv}>
        <ScrollAnimation
          animateIn="animate__slideInLeft"
          className={styles.innerdiv1}
          duration={1}
          animateOnce={true}
        >
          <span className={styles.chatbothead}>
            Chat-Bot{" "}
            <img src={robot} style={{ width: "33px", height: "33px" }} />
          </span>
          <span className={styles.chatbotask}>Ask me anything ❓</span>
          <ul className={styles.chatul}>
            <span style={{ color: "#4db5ff" }}>Try:</span>
            <span className={styles.chatques}>What's your name?</span>
            <span className={styles.chatques}>
              What's your work experience?
            </span>
            <span className={styles.chatques}>What are your skills?</span>
          </ul>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__slideInRight"
          className={styles.innerdiv}
          style={{ backgroundImage: `url(${chatbg})` }}
          duration={0.8}
          animateOnce={true}
        >
          <div className={styles.chatdiv}>
            {messages.map((msg) => {
              return messageRender(msg.role, msg.content);
            })}
            <div ref={bottomRef} />
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              placeholder="Message"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button className={styles.button} type="submit">
              <AiOutlineSend size={24} />
            </button>
          </form>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default ChatGPT;
