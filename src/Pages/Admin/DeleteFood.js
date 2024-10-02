import React, { useEffect, useState } from "react";
import DisplaDeleteFood from "./DisplaDeleteFood";

const DeleteFood = () => {
  const [FoodList, setFoodList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((res) => res.json())
      .then((data) => {
        setFoodList(data);
      });
  }, []); // Added an empty dependency array to avoid repeated fetching
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {FoodList.map((list) => (
            <DisplaDeleteFood list={list} key={list._id}></DisplaDeleteFood>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeleteFood;
