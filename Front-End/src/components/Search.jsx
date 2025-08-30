import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    // Implement search logic here
  };

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button className="search-icon" onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
