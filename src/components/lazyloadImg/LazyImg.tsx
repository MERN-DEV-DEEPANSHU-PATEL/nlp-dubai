import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImg = ({ src, className, alt }) => {
  return src === "none" ? (
    ""
  ) : (
    <LazyLoadImage
      className={className || ""}
      alt={alt || ""}
      effect="blur"
      src={src}
    />
  );
};

export default LazyImg;
