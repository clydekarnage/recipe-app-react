import React from "react";

const Recipes = (props) => (
  <div>
    {props.recipes.map((recipe) => {
      return (
        <div key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} />
          <p>{recipe.title}</p>
        </div>
      );
    })}
  </div>
);

export default Recipes;
