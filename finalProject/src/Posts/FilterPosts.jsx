import { useContext, useState } from "react";
import { postContext } from "../Layout/Homepage";
import "../Stylesheets/Filters.css";


function FilterPosts() {
  const { setFilter, setSortBy } = useContext(postContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="filters">
      <input
        className="searchBar"
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select onChange={handleSortChange} defaultValue="">
        <option value="">Sort By</option>
        <option value="lengthAsc">Length Ascending</option>
        <option value="lengthDesc">Length Descending</option>
      </select>
    </div>
  );
}

export default FilterPosts;
