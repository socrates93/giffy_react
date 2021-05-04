import React, { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch Man",
    "Samurai X",
    "Dragon Ball",
  ]);

  const handleAdd = (e) => setCategories((cats) => [...cats, "HunteXHunter"]);

  return (
    <>
      <h2>GifExpertApp ♥</h2>
      <hr />

      <button onClick={handleAdd}>Agregar</button>

      <ol>
        {categories.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ol>
    </>
  );
};
