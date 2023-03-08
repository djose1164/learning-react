import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f }) =>
    <FaStar
        color={selected ? "yellow" : "red"}
        onClick={onSelect}
    />;

const createArray = length => [...Array(length)];

function StarRating({ totalStarts = 5, selectedStars, onRate = f => f }) {
    return (
        <>
            {createArray(totalStarts).map((n, i) =>
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => onRate(i + 1)}
                />
            )}
            <p>{selectedStars} of {totalStarts} starts.</p>
        </>
    );
}


export default StarRating;