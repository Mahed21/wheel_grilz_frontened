import React, { useEffect, useState } from "react";
import "./Admin.css";
import { NavLink, useNavigate } from "react-router-dom";

const AddFood = () => {
  useEffect(() => {
    // Check if userKey is not in local storage
    if (!localStorage.getItem("userKey")) {
      navigate("/"); // Redirect to home page
    }
  }, [navigate]);
  // State variables to store form data
  const [foodImage, setFoodImage] = useState(null);
  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // to track submission status

  // Function to handle form submission
  const addFood = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate if an image is selected
    if (!foodImage) {
      alert("Please upload an image.");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("image", foodImage);

    const imgbbAPIKey = "6e348ee5df7e5ac0e70738f8b8b2f9f0";
    const imgbbUrl = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;

    try {
      // Upload image to ImgBB
      const imgbbResponse = await fetch(imgbbUrl, {
        method: "POST",
        body: formData,
      });
      const imgbbResult = await imgbbResponse.json();

      if (imgbbResult.success) {
        const imageUrl = imgbbResult.data.url;

        // Create the food item object
        const foodItem = {
          image: imageUrl,
          foodName: foodName,
          foodPrice: foodPrice,
          description: description,
        };

        // Send the food data to your local server
        const serverResponse = await fetch("http://localhost:5000/food", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(foodItem),
        });
        const serverResult = await serverResponse.json();

        if (serverResponse.ok) {
          alert("Food item added successfully!");
          window.location.reload();
        } else {
          alert("Failed to add food item. Please try again.");
        }
      } else {
        alert("Image upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      alert("An error occurred during submission.");
    } finally {
      setIsSubmitting(false); // Reset submission status
    }
  };
  let navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="container mt-5 w-50 d-flex justify-content-center">
        <form onSubmit={addFood}>
          <h2 className="text-center">Add Food Item</h2>

          {/* Image Upload Field */}
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
              required
            />
          </div>

          {/* Food Name Field */}
          <div className="mb-3">
            <label htmlFor="foodName" className="form-label">
              Food Name
            </label>
            <input
              type="text"
              className="form-control"
              id="foodName"
              placeholder="Enter food name"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              required
            />
          </div>

          {/* Food Price Field */}
          <div className="mb-3">
            <label htmlFor="foodPrice" className="form-label">
              Food Price (£)
            </label>
            <input
              type="number"
              className="form-control"
              id="foodPrice"
              placeholder="Enter food price"
              value={foodPrice}
              onChange={(e) => setFoodPrice(e.target.value)}
              step="0.01"
              required
            />
          </div>

          {/* Description Field */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder="Enter food description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            <NavLink to="/" href="" className="ms-2">
              Back to Home Page
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
