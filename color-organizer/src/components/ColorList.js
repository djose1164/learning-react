import React from "react";
import Color from "./Color"
import { useColors } from "./ColorProvider";

function ColorList() {
    const { colors } = useColors();
    if (!colors.length)
        return <div>No colors list.</div>;
    return (
        <div className="color-list">
            {colors.map(color => <Color key={color.id} {...color} />)}
        </div>
    );
}

export default ColorList;