import React from "react";

export type ImageProps = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  onClick?: () => void;
};

const Image = ({ src, alt, height, width, onClick }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      height={`${height ? height + "px" : "auto"}`}
      width={`${width ? width + "px" : "auto"}`}
      onClick={() => onClick && onClick()}
    />
  );
};

export { Image };
