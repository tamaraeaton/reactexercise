import React from "react";

function Logo({ image, alt }) {
  return (
    <div>
      <img src={image} alt={alt} />
    </div>
  );
}

export default Logo;
