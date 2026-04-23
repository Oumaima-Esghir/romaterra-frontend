import React from "react";

const Image = ({ imgSrc, className, alt = "" }) => {
  return <img className={className} src={imgSrc} alt={alt} />;
};

export default Image;
