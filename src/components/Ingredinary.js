import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import { Search } from "./Search";
import { SearchResultsList } from "./SearchResultsList.js";
import ingredients from "./ingredients.json";

export default function Ingredinary() {
  const [results, setResults] = useState([]);

  const [openPopupIndex, setOpenPopupIndex] = useState(null);

  const openPopup = (index) => {
    setOpenPopupIndex(index);
  };

  const closePopup = () => {
    setOpenPopupIndex(null);
  };

  return (
    <>
      <div className="dbanner banner-s bg-ingredinary">
        <NavBar darkMode={true} />
        <h1>skincare ingredient dictionary</h1>
        <h2>your ultimate guide for accessing ingredient benefits</h2>
      </div>
      <Search setResults={setResults} />
      {results && results.length > 0 && <SearchResultsList results={results} />}
      <div className="ingredlist">
        <h1>INGREDIENT</h1>
        <div className="line"></div>
        {ingredients &&
          ingredients.map((ingred, index) => {
            return (
              <div className="ingred" key={index}>
                <h1>{ingred.ingredient}</h1>
                <h2>{ingred.description}</h2>
                <button onClick={() => openPopup(index)}>
                  READ MORE -{">"}
                </button>
                <div className="line"></div>
                {openPopupIndex === index && (
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
              </div>
            );
          })}
      </div>
    </>
  );
}
