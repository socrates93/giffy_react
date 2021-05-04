import React, { useEffect, useState } from "react";
import { GifRidItem } from "./GifRidItem";

export const GifGrid = ({ category }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async (param = "goku") => {
    const apiKey = "oA5OhtElMgfxUNbug0b0t7oYRiQ0pwHS";

    const url = `https://api.giphy.com/v1/gifs/search?q=${param}&limit=10&api_key=${apiKey}`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    setItems(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
      {items.length > 0 && items.map((i) => <GifRidItem key={i.id} img={i} />)}
    </>
  );
};
