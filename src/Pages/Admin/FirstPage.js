import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const FirstPage = () => {
  let navigate = useNavigate();
  useEffect(() => {
    // Check if userKey is not in local storage
    if (!localStorage.getItem("userKey")) {
      navigate("/"); // Redirect to home page
    }
  }, [navigate]);
  const addFood = () => {
    navigate("/addFood073591048241998");
  };

  const deleteFood = () => {
    navigate("/deleteFood073591048241998");
  };
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center mb-3"
        style={{ height: "60vh" }}
      >
        <button className="btn btn-warning mx-2 p-5" onClick={deleteFood}>
          Delete/update
        </button>

        <button className="btn btn-success mx-2 p-5" onClick={addFood}>
          Add Food
        </button>
      </div>

      <NavLink to="/" href="" className="ms-5">
        {" "}
        back to home page
      </NavLink>
    </div>
  );
};

export default FirstPage;
