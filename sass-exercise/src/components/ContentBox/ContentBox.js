import React from "react";
import styles from "./ContentBox.module.scss";
import InfoBox from "../InfoBox";
import Sprout from "../../assets/images/Sprout.png";
import WaterCan from "../../assets/images/WaterCan.png";
import WheelBarrow from "../../assets/images/WheelBarrow.png";
import { infoText1, infoText2, infoText3 } from "../../const/const.js";

function ContentBox() {
  return (
    <div className={styles.ContentBox}>
      <InfoBox image={Sprout} alt={"Cute Sprout"} text={infoText1} />
      <InfoBox
        image={WaterCan}
        alt={"Cute Watercan"}
        text={infoText2}
        reverse={true}
      />
      <InfoBox image={WheelBarrow} alt={"Cute WheelBarrow"} text={infoText3} />
    </div>
  );
}

export default ContentBox;
