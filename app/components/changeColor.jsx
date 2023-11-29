import React, { useState } from 'react';

const ChangeColor = ({ color, changeColor, disableEditing, inputRef }) => {
  const [hexValue, setHexValue] = useState('');

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setHexValue(newValue);
    changeColor(newValue); // Call the changeColor function with the new hex value
  };

  return (
    <form role="form" name="change-color">
      <label htmlFor="hex-color" hidden>
        Hex Color
      </label>
      <input
        type="text"
        id="hex-color"
        name="hex-color"
        aria-label="hex color"
        value={hexValue}
        onChange={handleInputChange}
        ref={inputRef}
      />
    </form>
  );
};

export default ChangeColor;
