import React from 'react';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ingredients from "./ingredients.json";

export const Search = ({ setResults }) => {
    const [input, setInput] = useState("");
  
    const fetchData = (value) => {
      // Use the imported JSON data instead of a URL
      const results = ingredients.filter((user) => {
            return (
              value &&
              user &&
              user.ingredient &&
              user.ingredient.toLowerCase().includes(value)
            );
          });
          setResults(results);
        };
  
    const handleChange = (value) => {
      setInput(value);
      fetchData(value);
    };
  
    return (
      <div className="input-wrapper">
        <FaSearch/>
        <input
          placeholder="Type to search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    );
  };