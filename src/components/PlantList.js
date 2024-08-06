import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDeletePlant }) {

  const plantsToDisplay = plants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} onDeletePlant={onDeletePlant} />;
  })

  return (
    <ul className="cards">{plantsToDisplay}
    </ul>
  );
}

export default PlantList;
