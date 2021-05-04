import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball Super"]);

  const handleAdd = (cat) => setCategories((cats) => [...cats, cat]);

  return (
    <>
      <h2>GifExpertApp ♥</h2>

      <AddCategory handleAddCategory={handleAdd} />
      <hr />

      <ol>
        {categories.map((c) => (
          <GifGrid key={c} category={c} />
        ))}
      </ol>
    </>
  );
};
