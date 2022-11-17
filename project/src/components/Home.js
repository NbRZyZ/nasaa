import styles from "../styles/components/Homi.module.css";
import { Header } from "./Header";
import Cards from "./cards.json";
import { Review } from "./Review";
import { Button, Container } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { ThemeContext } from "./Themeprovider";
import { useContext } from "react";

export const Home = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.homi}>
      <div className={styles.container}>
        <div className={styles.bottom}>
          <h1 className={styles.text1}>
            Instant collaborations for remote teams
          </h1>
          <p className={styles.p1}>All in one for your remote team chats,</p>
          <p className={styles.p2}>collaboration and track projects</p>
          <div className={styles.inputd}>
            <input placeholder="Email" className={styles.input}></input>
            <button className={styles.button}>Get early access</button>
          </div>
        </div>
      </div>
      <div className={styles.page2} style={{background : isDark ? "black" : "white"}} >
        <div className={styles.page2text}>
          <h1 className={styles.text3} style={{color : isDark ? "white" : "black"}}>Your Hub for teamwork</h1>
          <p className={styles.p}  style={{color: isDark ? "white" : "black"}}>
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <a className={styles.page2link}>Learn more--</a>
        </div>
        <div>
          <div className={styles.meeting}></div>
          <div className={styles.event}></div>
        </div>
      </div>
      <div className={styles.management} style={{background : isDark ? "black" : "white"}}>
        <div className={styles.maskg}>
          <div className={styles.event2img}></div>
          <div className={styles.event3img}></div>
        </div>
        <div className={styles.textcont}>
          <h1 className={styles.title}  style={{color: isDark ? "white" : "black"}}>Simple task management</h1>
          <p className={styles.p}  style={{color: isDark ? "white" : "black"}}>
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <a className={styles.page2link}>Learn more--</a>
        </div>
      </div>
      <div className={styles.s4} style={{background : isDark ? "black" : "white" }}>
        <div className={styles.textcont}>
          <h1 className={styles.title } style={{color: isDark ? "white" : "black"}}>Scheduling that actually works</h1>
          <p className={styles.p} style={{color : isDark ? "white" : "black"}}>
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </p>
          <a className={styles.page2link}>Learn more--</a>
        </div>
        <div className={styles.maskgimg}>
          <div className={styles.calendar}></div>
        </div>
      </div>
      <div className={styles.s5} style={{background : isDark ? "black" : "white"}}>
        <Container>
          <h1  style={{color: isDark ? "white" : "black"}}>What people say about us</h1>
          <div className={styles.imgs}  style={{color: isDark ? "white" : "black"}} >
            {Cards.map((card, index) => {
              return (
                <Review key={index + card} text={card.text} name={card.name} />
              );
            })}
          </div>
          <Button>Left</Button>
          <Button>Right</Button>
        </Container>
      </div>
    </div>
  );
};
