import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Security = () => {
  const [key, setKey] = useState("");
  const [storedKey, setStoredKey] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    // Fetch the stored key from the database when the component mounts
    const fetchKey = async () => {
      try {
        const response = await fetch("http://localhost:5000/key");
        const data = await response.json();
        setStoredKey(data.key); // Store the fetched key
      } catch (error) {
        console.error("Error fetching key:", error);
      }
    };

    fetchKey();
  }, []);

  const checkKey = (e) => {
    e.preventDefault();
    if (key === storedKey) {
      localStorage.setItem("userKey", key);
      navigate("/admin073591048241998");
    } else {
      alert("Incorrect key. Please try again.");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="w-50 text-center">
        <h1>Give the pin number</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="key"
            placeholder="Enter the security key"
            onChange={(e) => setKey(e.target.value)}
            required
            style={{
              fontSize: "1.2rem",
              padding: "10px 20px",
              border: "2px solid #007bff",
              borderRadius: "5px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#f8f9fa",
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          style={{
            fontSize: "1.1rem",
            padding: "10px 20px",
          }}
          onClick={checkKey}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Security;
