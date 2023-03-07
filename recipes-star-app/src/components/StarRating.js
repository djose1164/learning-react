import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f }) =>
    <FaStar
        color={selected ? "red" : "green"}
        onClick={onSelect}
    />;

const createArray = length => [...Array(length)];

function StarRating({ style = {}, totalStarts = 5, ...props }) {
    const [selectedStars, setSelectedStar] = useState(0);
    return (
        <div style={{ padding: "5px", ...style }} {...props}>
            {createArray(totalStarts).map((n, i) =>
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStar(i + 1)}
                />
            )}
            <p>{selectedStars} of {totalStarts} starts.</p>
        </div>
    );
}


export default StarRating;