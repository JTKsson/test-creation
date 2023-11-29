"use client"
import { useState, useEffect } from "react";
import AddColor from "./AddColor";
import RemoveColor from "./removeColor";
import { mockColors } from "@/tests/utils";
import { isUnique } from "@/tests/utils";

const ColorList = () => {
  const [colors, setColors] = useState([]);

  const getRandomColors = () => {
    const shuffledColors = mockColors.sort(() => 0.5 - Math.random());
    const selectedColors = shuffledColors.slice(0, 3);
    setColors(selectedColors);
  };

  useEffect(() => {
    getRandomColors();
  }, []);

  const handleAddColor = () => {
    const remainingColors = mockColors.filter(
      (color) => !colors.some((c) => c.name === color.name)
    );

    if (remainingColors.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingColors.length);
      const randomColorToAdd = remainingColors[randomIndex];
      setColors((prevColors) => [...prevColors, randomColorToAdd]);
    }
  };

  const handleRemoveColor = (indexToRemove) => {
    const updatedColors = colors.filter((_, index) => index !== indexToRemove);
    setColors(updatedColors);
  };

  return (
    <div role="list">
      {colors.map((color, index) => (
        <div key={index} role="listitem">
          {colors.length > 2 && (
            <button onClick={() => handleRemoveColor(index)} title="Remove color">
              {color.hex}
            </button>
          )}
          <span>{color.name}</span>
          <span>{color.hex}</span>
        </div>
      ))}
      {colors.length < 10 && (
        <AddColor onClick={handleAddColor} title="Add color"/>
      )}
    </div>
  );
};

export default ColorList;
