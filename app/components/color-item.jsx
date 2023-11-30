'use client'

import { useState } from "react";
import { mockColors, mockColor, hexcolorRegex } from "@/tests/utils"
import ChangeColor from "./changeColor"

const ColorItem = () => {
  const [isButtonClicked, setButtonClicked] = useState(false);
  
  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  const handleOnSubmit = () => {
    setButtonClicked(false)
  }


    return (
        <div>
            <li>
                <h2>{mockColor.name}</h2>
                {isButtonClicked ? (
                   <ChangeColor onSubmit={handleOnSubmit} />
                 ) : (
                   
                     <button onClick={handleButtonClick}>{mockColor.hex}</button>
                   
                 )}

            </li>
            
        </div>
    )
}

export default ColorItem