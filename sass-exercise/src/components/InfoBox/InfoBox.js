import React from "react";
import styles from "./InfoBox.module.scss";

function InfoBox({ image, alt, text, reverse = false }) {
  return reverse ? (
    <div className={styles.InfoBox}>
      <div>
        <p>{text}</p>
      </div>
      <img src={image} alt={alt} />
    </div>
  ) : (
    <div className={styles.InfoBox}>
      <img src={image} alt={alt} />
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default InfoBox;
