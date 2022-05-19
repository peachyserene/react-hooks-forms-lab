import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  //set state for our new name and category. State is placed here becauseshopping list wont use them directly, they will be stored in onItemFormSubmit
  const [newName, setNewName] = useState("");
  const [newCat, setNewCat] = useState("Produce");

  //controlling forms for name and category
  function handleNameChange(e) {
    setNewName(e.target.value);
  }

  function handleCatChange(e) {
    setNewCat(e.target.value);
  }
  //when submitted, the info is set as an object and stored in onItemFormSubmit to pass it through parent
  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({ id: uuid(), name: newName, category: newCat });
  }

  //added event listeners to controll the forms, && the subimit listener
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newName}
          onChange={handleNameChange}
        />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCatChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
