import React from "react";
import "./Home.css";

const DisplayFoodList = (props) => {
  const { image, foodName, foodPrice, description } = props.list;

  return (
    <div className="col-md-4 mb-4 mt-5">
      <div className="card h-100">
        <img
          src={image}
          className="card-img-top img-fluid"
          alt={foodName}
          style={{ width: "100%", height: "150px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{foodName}</h5> {/* Styled via CSS */}
          {/* <h6 className="card-subtitle mb-2">Price: ${foodPrice}</h6>{" "} */}
          {/* Styled via CSS */}
          <p className="card-text" style={{ wordWrap: "break-word" }}>
            {description}
          </p>{" "}
          {/* Styled via CSS */}
        </div>
      </div>
    </div>
  );
};

export default DisplayFoodList;
