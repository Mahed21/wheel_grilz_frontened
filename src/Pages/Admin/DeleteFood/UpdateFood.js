import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateFood = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // Check if userKey is not in local storage
    if (!localStorage.getItem("userKey")) {
      navigate("/"); // Redirect to home page
    }
  }, [navigate]);
  const { image, foodName, foodPrice, description, _id } = location.state || {};

  const [updFoodImage, setFoodImage] = useState(image || null);
  const [updFoodName, setFoodName] = useState(foodName || "");
  const [updFoodPrice, setFoodPrice] = useState(foodPrice || "");
  const [updDescription, setDescription] = useState(description || "");

  const updateFood = async (e) => {
    e.preventDefault(); // Prevent default form submission

    let finalImage = updFoodImage;

    // If a new image file is uploaded, upload it to imgbb
    if (updFoodImage && updFoodImage !== image) {
      const formData = new FormData();
      formData.append("image", updFoodImage);

      const imgbbAPIKey = "6e348ee5df7e5ac0e70738f8b8b2f9f0";
      const imgbbUrl = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
      const imgbbResponse = await fetch(imgbbUrl, {
        method: "POST",
        body: formData,
      });
      const imgbbResult = await imgbbResponse.json();

      if (imgbbResult.success) {
        finalImage = imgbbResult.data.url; // Set the new image URL
      } else {
        alert("Image upload failed.");
        return; // Exit if the upload failed
      }
    }

    // Prepare the updated data for the API
    const updatedFood = {
      image: finalImage,
      foodName: updFoodName || foodName,
      foodPrice: updFoodPrice || foodPrice,
      description: updDescription || description,
    };

    try {
      const response = await fetch(`http://localhost:5000/food/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFood),
      });
      const data = await response.json();

      if (data.status === "success") {
        alert("Successfully updated");
        navigate("/deleteFood073591048241998"); // Navigate after successful update
      } else {
        alert("Update failed. Please try again.");
      }
    } catch (error) {
      console.error("Error updating food:", error);
      alert("An error occurred while updating the food item.");
    }
  };

  return (
    <div className="container mt-5 w-50 d-flex justify-content-center">
      <form onSubmit={updateFood}>
        <h2 className="text-center">Update Food Item</h2>

        <div className="mb-3">
          <label htmlFor="foodImage" className="form-label">
            Upload Image
          </label>
          <input
            className="form-control"
            type="file"
            id="foodImage"
            accept="image/*"
            onChange={(e) => setFoodImage(e.target.files[0])}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="foodName" className="form-label">
            Food Name
          </label>
          <input
            type="text"
            className="form-control"
            id="foodName"
            placeholder="Enter food name"
            value={updFoodName}
            onChange={(e) => setFoodName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="foodPrice" className="form-label">
            Food Price (£)
          </label>
          <input
            type="number"
            className="form-control"
            id="foodPrice"
            placeholder="Enter food price"
            value={updFoodPrice}
            onChange={(e) => setFoodPrice(e.target.value)}
            step="0.01"
            min="0"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Enter food description"
            value={updDescription}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFood;
