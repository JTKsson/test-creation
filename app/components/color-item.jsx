import { mockColors, mockColor, hexcolorRegex } from "@/tests/utils"

const ColorItem = () => {
    return (
        <div>
            <li>
                <h2>{mockColor.name}</h2>
                <button>{mockColor.hex}</button>

                <form aria-label="change-color" >
                    <input id="hex" name="hex-color" hidden />
                    
                </form>
             
            </li>
            
        </div>
    )
}

export default ColorItem