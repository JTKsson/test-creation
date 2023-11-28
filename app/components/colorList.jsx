import AddColor from "./AddColor";
import RemoveColor from "./removeColor";

const ColorList = ({ colors, setColors }) => {

  const handleAddColor = () => {
    // Logic to add a new color to the colors array using setColors
  };

  const handleRemoveColor = () => {
    // Logic to remove a color from the colors array using setColors
  };

  return (
    <div role="list">
      {colors.map((color, index) => (
        <div key={index} role="listitem">
          {colors.length > 2 && (
            <RemoveColor onClick={() => handleRemoveColor(index)} title={`Remove color ${color.name}`} name={hexcolorRegex}>
              Remove
            </RemoveColor>
          )}
          <span>{color.name}</span>
          <span>{color.hex}</span>
        </div>
      ))}
      {colors.length < 10 && (
        <AddColor onClick={handleAddColor} title="Add color">
          Add Color
        </AddColor>
      )}
    </div>
  );
}

export default ColorList