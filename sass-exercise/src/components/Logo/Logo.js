import React from "react";
import styles from "./Logo.module.scss";

function Logo({ image, alt }) {
  return (
    <div>
      <img className={styles.Logo} src={image} alt={alt} />
    </div>
  );
}

export default Logo;
