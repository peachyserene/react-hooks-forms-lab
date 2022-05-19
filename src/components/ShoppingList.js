import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  //set state for the categor and search filters
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearched] = useState("");
  //handlers that will update state for search and category filters
  function handleSearchChange(event) {
    setSearched(event.target.value);
  }
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  //pulls up the object from the ItemForm child adds it to "items" list
  function onItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  //filters through "items" and only returns an item if the category matches whats selected
  let itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  //pulling from the itemsToDisplay list, returns an item the name contains whats typed in the search
  let filteredItems = itemsToDisplay.filter((item) => {
    if (search === "") {
      return true;
    }
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        search={search}
      />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
