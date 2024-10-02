import React from "react";

const DisplaDeleteFood = (props) => {
  const { image, foodName, foodPrice, description, _id } = props.list;
  const deleteFood = (id) => {
    fetch(`http://localhost:5000/food/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Food item deleted:", data.message);
          window.location.reload();
        } else {
          alert("Delete error:", data.message);
        }
      })
      .catch((error) => {
        alert("An error occurred:", error);
      });
  };
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={image}
          className="card-img-top img-fluid"
          alt={foodName}
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{foodName}</h5> {/* Styled via CSS */}
          <h6 className="card-subtitle mb-2">Price: ${foodPrice}</h6>{" "}
          {/* Styled via CSS */}
          <p className="card-text" style={{ wordWrap: "break-word" }}>
            {description}
          </p>{" "}
          <button className="btn btn-warning" onClick={() => deleteFood(_id)}>
            Delete
          </button>
          {/* Styled via CSS */}
        </div>
      </div>
    </div>
  );
};

export default DisplaDeleteFood;
