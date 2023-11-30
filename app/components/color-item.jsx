import { mockColors, mockColor, hexcolorRegex } from "@/tests/utils"
import ChangeColor from "./changeColor"

const ColorItem = () => {
    return (
        <div>
            <li>
                <h2>{mockColor.name}</h2>
                <button>{mockColor.hex}</button>

                < ChangeColor />
             
            </li>
            
        </div>
    )
}

export default ColorItem