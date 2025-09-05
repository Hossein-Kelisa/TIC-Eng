import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        className="search-icon"
        onClick={handleSearch}
        aria-label="Search"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
