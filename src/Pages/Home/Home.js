import React, { useEffect, useState } from "react";
import "./Home.css";
import banner from "../../image/banner2.jfif";
import DisplayFoodList from "./DisplayFoodList";

const Home = () => {
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
      <img src={banner} alt="Banner" className="image_fixed" />

      {/* Food info */}
      <div className="container mt-5">
        <div className="row">
          {FoodList.map((list) => (
            <DisplayFoodList list={list} key={list._id}></DisplayFoodList>
          ))}
        </div>
      </div>
      <div className="contact-section">
        <div className="contact-content">
          <h2 className="company-name">Grillz on Wheelz</h2>
          <p className="company-address">
            202 Hawkshaw Court 150 Upper North Street, London,E14 6tu
          </p>
          <p className="company-phone">Shathil Islam: +4407440301806</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
