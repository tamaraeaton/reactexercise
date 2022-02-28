import React from "react";
import styles from "./InfoBox.module.scss";

function InfoBox({ isDarkTheme, image, alt, text, reverse = false }) {
  const theme = isDarkTheme ? "dark" : "light";
  const reversTheme = reverse ? "reverse" : "";

  return (
    <div
      className={`${styles.InfoBox} ${styles[`InfoBox--${theme}`]} ${
        styles[`InfoBox--${reversTheme}`]
      }`}
    >
      <img className={styles.ImageBox} src={image} alt={alt} />
      <div>
        <p className={`${styles.TextBox} ${styles[`TextBox--${theme}`]}`}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default InfoBox;
