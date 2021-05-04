import React from "react";

export const GifRidItem = ({ img }) => {
  return (
    <>
      <img src={img.url} alt={img.title} />
    </>
  );
};
