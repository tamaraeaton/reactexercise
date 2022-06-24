import React from "react";
import styles from "./ContentBox.module.scss";
import InfoBox from "../InfoBox";
import Sprout from "../../assets/images/Sprout.png";
import WaterCan from "../../assets/images/WaterCan.png";
import WheelBarrow from "../../assets/images/WheelBarrow.png";
import { infoText1, infoText2, infoText3 } from "../../const/const.js";

function ContentBox({ isDarkTheme }) {
  const theme = isDarkTheme ? "dark" : "light";
  return (
    <div className={`${styles.ContentBox} ${styles[`ContentBox--${theme}`]}`}>
      <br/>
      <InfoBox
        isDarkTheme={isDarkTheme}
        image={Sprout}
        alt={"Cute Sprout"}
        text={infoText1}
      />
      <br/>
      <InfoBox
        isDarkTheme={isDarkTheme}
        image={WaterCan}
        alt={"Cute Watercan"}
        text={infoText2}
        reverse={true}
      />
      <br/>
      <InfoBox
        isDarkTheme={isDarkTheme}
        image={WheelBarrow}
        alt={"Cute WheelBarrow"}
        text={infoText3}
      />
      <br/>
    </div>
  );
}

export default ContentBox;
