import React, { useRef, useState } from "react";
import { useColors } from "./ColorProvider";
import { useInput } from "./color-hooks"

function AddColorForm() {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const { addColor } = useColors();

    const submit = e => {
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input
                type="text" placeholder="color title..."
                {...titleProps} required
            />
            <input
                type="color"
                {...colorProps} required
            />
            <button>Add</button>
        </form>
    );
}

export default AddColorForm;