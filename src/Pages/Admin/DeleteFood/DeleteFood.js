import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const DeleteFood = (props) => {
  const { image, foodName, foodPrice, description, _id } = props.list;
  const { afterUpdate } = props;
  let navigate = useNavigate();
  useEffect(() => {
    // Check if userKey is not in local storage
    if (!localStorage.getItem("userKey")) {
      navigate("/"); // Redirect to home page
    }
  }, [navigate]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/food/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete item");
        }
        return res.json();
      })
      .then((data) => {
        afterUpdate(); // Trigger refetch after deletion
        alert("Item deleted successfully");
      })
      .catch((error) => alert("Error:", error.message));
  };

  const handleUpdate = (image, foodName, foodPrice, description, _id) => {
    navigate("/updateFood073591048241998", {
      state: { image, foodName, foodPrice, description, _id },
    });
  };

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
          <h5 className="card-title">{foodName}</h5>
          <h6 className="card-subtitle mb-2">Price: ${foodPrice}</h6>
          <p className="card-text" style={{ wordWrap: "break-word" }}>
            {description}
          </p>
        </div>
        <button className="btn btn-danger" onClick={() => handleDelete(_id)}>
          Delete
        </button>
        <button
          className="btn btn-success mt-2"
          onClick={() =>
            handleUpdate(image, foodName, foodPrice, description, _id)
          }
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default DeleteFood;
