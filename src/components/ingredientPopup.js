import React from "react";

export default function IngredientPopup({ ingred, closePopup, isOpen }) {
  return (
    <>
      {isOpen && (
        <div className="popup">
          <button onClick={closePopup}>X</button>
          <h1>{ingred.ingredient}</h1>

          <h2>BENEFITS</h2>
          <ul>
            {ingred.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <h2>FUNCTIONS</h2>
          <ul>
            {ingred.function.map((func, index) => (
              <li key={index}>{func}</li>
            ))}
          </ul>
          <h2>AT A GLANCE</h2>
          <ul>
            {ingred.at_a_glance.map((glance, index) => (
              <li key={index}>{glance}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
