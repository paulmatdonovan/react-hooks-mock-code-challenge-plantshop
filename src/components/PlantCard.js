import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant }) {
  const [isInStock, setIsInStock] = useState(true);
  // destrudture the plant object
  const { id, name, image, price } = plant

  function handleToggleStock() {
    // this calls whatever is the opposiste state of isInStock
    // setIsInStock(!isInStock)
    // or use a callback function
    setIsInStock((isInStock) => !isInStock);
  }
  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
    onDeletePlant(id);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleToggleStock}>In Stock</button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default PlantCard;
