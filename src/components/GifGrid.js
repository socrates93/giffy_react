import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifRidItem } from "./GifRidItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Cargando...</p>
      )}
      <div className="card-grid">
        {images.length > 0 &&
          images.map((i) => <GifRidItem key={i.id} img={i} />)}
      </div>
    </>
  );
};
