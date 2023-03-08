import React, { useRef, useState } from "react";
import { useInput } from "./hooks"

function AddColorForm({ onNewColor = f => f }) {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = e => {
        e.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
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