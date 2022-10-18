import React, { useState } from "react";
import axios from "axios";

function App() {
  //
  const [recipeTitleFormInput, setRecipeTitleFormInput] = useState("");
  function handleRecipeTitleFormInputChange(event) {
    setRecipeTitleFormInput(event.target.value);
  }

  //const [Cover image, setCover image] = useState(undefined????);

  //
  const [ingredientsListFormInput, setIngredientsListFormInput] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([]);
  function handleIngredientsListFormInputChange(event) {
    setIngredientsListFormInput(event.target.value);
  }
  function handleIngredientsListFormInputClick() {
    setIngredientsList(ingredientsListFormInput !== "" ? [...ingredientsList, ingredientsListFormInput]: ingredientsList);
    setIngredientsListFormInput("");
  }

  //
  const [instructionsListFormInput, setInstructionsListFormInput] = useState([]);
  const [instructionsList, setInstructionsList] = useState([]);
  function handleInstructionsListFormInputChange(event) {
    setInstructionsListFormInput(event.target.value);
  }
  function handleInstructionsListFormInputClick() {
    setInstructionsList(instructionsListFormInput !== "" ? [...instructionsList, instructionsListFormInput]: instructionsList);
    setInstructionsListFormInput("");
  }

  //
  function handleCreateRecipeClick() {
    axios
      .post("/api/version1/recipes", {
        title: recipeTitleFormInput,
        instructions: instructionsList,
        ingredients: ingredientsList
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
   }

 

  return (
    <div className="app">
      <div className="formInputs">
        <div className="recipeTitleFormInput">
          <input
            placeholder="Name your Recipe"
            onChange={handleRecipeTitleFormInputChange}
            value={recipeTitleFormInput}
          />
        </div>
        <div className="ingredientsListFormInput">
          <input
            placeholder="Add an ingredient to the ingredients list"
            onChange={handleIngredientsListFormInputChange}
            value={ingredientsListFormInput}
          />
          <button onClick={handleIngredientsListFormInputClick}>Add</button>
        </div>
        <div className="instructionsListFormInput">
          <input
            placeholder="Add an instruction to the instructions list"
            onChange={handleInstructionsListFormInputChange}
            value={instructionsListFormInput}
          />
          <button onClick={handleInstructionsListFormInputClick}>Add</button>
        </div>
      </div>

      <div className="recipe-preview">
        Recipe: {recipeTitleFormInput}
        <br />
        Ingredients: {ingredientsList}
        <br />
        Instructions: {instructionsList}
      </div>

      <div className="Create Recipe">
        <button onClick={handleCreateRecipeClick}>
          Create Recipe!
        </button>
      </div>
    </div>
  );
}

export default App;
