import React, { useEffect, useState } from "react";
import "./Home.css";
import banner from "../../image/banner2.jfif";
import DisplayFoodList from "./DisplayFoodList";
import FoodData from "./FoodData";

const Home = () => {
  if (localStorage.getItem("userKey")) {
    localStorage.removeItem("userKey");
  }
  const [FoodList, setFoodList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((res) => res.json())
      .then((data) => {
        setFoodList(data);
      });
  }, []); // Use the static food data

  return (
    <div>
      <div className="mt-2">
        <img src={banner} alt="Banner" className="img-fluid image_fixed" />
      </div>
      {/* Food info */}
      <div className="container mt-2">
        <div className="row">
          {FoodList.map((list) => (
            <DisplayFoodList list={list} key={list._id}></DisplayFoodList>
          ))}
        </div>
      </div>
      <section className="contact-section d-flex flex-column justify-content-center align-items-center text-center">
        <div className="contact-content">
          {/* Name */}
          <h2 className="contact-name fade-in">Contact Grillz on Wheelz</h2>
          {/* Address */}
          <p className="contact-address fade-in mt-2">
            202 Hawkshaw Court 150 Upper North Street, London,E14 6tu
          </p>
          <p className="contact-address fade-in mt-2">
            Shathil Islam: +4407440301806
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
