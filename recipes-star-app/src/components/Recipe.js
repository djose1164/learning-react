import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";
import StarRating from "./StarRating"
import React from "react";

function Recipe({ name, ingredients, steps }) {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <IngredientsList list={ingredients} />
            <Instructions title="Cooking Instructions" steps={steps} />
            <StarRating />
        </section>
    );
}

export default Recipe;