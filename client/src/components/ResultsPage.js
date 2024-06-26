import NavBar from "./NavBar";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import conditions from "./conditions.json";
import ingredientsList from "./ingredients.json";

export default function ResultsPage() {
  const location = useLocation();
  const result = location.state?.result;
  const [ingredients, setIngredients] = useState([]);
  const [openPopupIndex, setOpenPopupIndex] = useState(null);
  const [conditionName, setConditionName] = useState("");
  const [conditionTreatments, setConditionTreatments] = useState(null);

  const classLabels = [
    "Blackheads",
    "Cystic Acne",
    "Dry Skin",
    "Acne Mechanica",
    "Papules",
    "Pustules",
    "Whiteheads",
  ];

  function indexOfLargestElement(arr) {
    try {
      if (arr.length === 0) {
        throw new Error("The array is empty.");
      }

      let largestIndex = 0;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[largestIndex]) {
          largestIndex = i;
        }
      }
      return largestIndex;
    } catch (error) {
      console.error(error.message);
      return -1;
    }
  }

  useEffect(() => {
    if (result && result.predictions && result.predictions[0]) {
      const largestIndex = indexOfLargestElement(result.predictions[0]);
      const name = classLabels[largestIndex];
      setConditionName(name);

      const treatments = conditions.find(
        (item) => item.condition === name
      );
      setConditionTreatments(treatments);

      if (treatments) {
        setIngredients(
          ingredientsList.filter((ingredient) =>
            treatments.treatments.includes(ingredient.ingredient)
          )
        );
      } else {
        setIngredients([]);
      }
    }
    
    // Cleanup function
    return () => {
      setIngredients([]);
      setOpenPopupIndex(null);
      setConditionName("");
      setConditionTreatments(null);
    };
  }, [result]);

  const openPopup = (index) => {
    setOpenPopupIndex(index);
  };

  const closePopup = () => {
    setOpenPopupIndex(null);
  };

  // debug
  console.log(result);
  console.log(result?.predictions[0]);
  console.log(conditionName);
  console.log(typeof conditionName);
  console.log(conditionTreatments);

  return (
    <div>
      <div className="dbanner banner-s bg-result">
        <NavBar darkMode={true} />
        <h1>take a look at your scan results.</h1>
        <h2>It looks like your main skin concern is: {conditionName}</h2>
        <h2>
          following an analysis of your skin, we recommend {ingredients.length}{" "}
          essential ingredients...
        </h2>
        <Link to="/scan">
          <button>REDO ANALYSIS</button>
        </Link>
      </div>
      <h1 className="results-heading">ingredients</h1>
      <hr></hr>
      <div className="treatments">
        {ingredients &&
          ingredients.map((ingredient, index) => (
            <div key={index}>
              <h1>{ingredient.ingredient}</h1>
              <h2>{ingredient.description}</h2>
              <button onClick={() => openPopup(index)}>READ MORE -{">"}</button>
              {openPopupIndex === index && (
                <div className="popup">
                  <button onClick={closePopup}>X</button>
                  <h1>{ingredient.ingredient}</h1>
                  <h2>BENEFITS</h2>
                  <ul>
                    {ingredient.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                  <h2>FUNCTIONS</h2>
                  <ul>
                    {ingredient.function.map((func, idx) => (
                      <li key={idx}>{func}</li>
                    ))}
                  </ul>
                  <h2>AT A GLANCE</h2>
                  <ul>
                    {ingredient.at_a_glance.map((glance, idx) => (
                      <li key={idx}>{glance}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
