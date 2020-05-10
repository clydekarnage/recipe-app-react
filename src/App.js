import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";

const API_KEY = "db254b5cd61744d39a2deebd9c361444";

class App extends Component {
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const api_call = await fetch(
      `https://api.spoonacular.com/recipes/716429/information?apiKey=${API_KEY}&includeNutrition=true.`
    );

    const data = await api_call.json();
    console.log(data.extendedIngredients);

    console.log(recipeName);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;
