import { SearchResult } from "./SearchResult";
import ingredients from "./ingredients.json";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.ingredient} key={id} />;
      })}
    </div>
  );
};