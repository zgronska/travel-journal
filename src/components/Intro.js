import React from "react";
import styles from "./Intro.module.css";
import { RiCloseLine, RiHeart2Line } from "react-icons/ri";

const Intro = ({ setIsOpen }) => {
  const title = "Hello code reviewer!";
  const content =
    "This is my submission for the React Section 2 Solo Project at Scrimba! I decided to list all the UNESCO World Heritage sites I've visited so far. Hope you enjoy it!";

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)}>
        <div className={styles.modal}>
          <RiCloseLine
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
          />

          <h5 className={styles.heading}>{title}</h5>

          <p className={styles.modalContent}>
            {content} <RiHeart2Line style={{ display: "inline" }} />
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
