import React from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        //setting up search form to be controlled
        onChange={onSearchChange}
        value={search}
      />
      {/* setting up category form to be controlled */}
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
