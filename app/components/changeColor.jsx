"use client";
import React, { useState } from "react";

const ChangeColor = ({ color, changeColor, disableEditing, inputRef }) => {
  const [hexValue, setHexValue] = useState("");

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setHexValue(newValue);
    changeColor(newValue);
  };

  return (
    <div>
      <form aria-label="change-color">
        <label htmlFor="hex" hidden>
          Hex Color
        </label>
        <input
          id="hex"
          name="hex color"
          value={hexValue}
          onChange={handleInputChange}
          ref={inputRef}
        />
      </form>
    </div>
  );
};

export default ChangeColor;
