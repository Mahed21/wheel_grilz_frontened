import React from "react";
import DeleteFood from "./DeleteFood";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

const LoadData = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:5000/food").then((res) => res.json()),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div>
      <div className="container mt-2">
        <div className="row">
          {data.map((list) => (
            <DeleteFood
              list={list}
              key={list._id}
              afterUpdate={() => refetch()}
            />
          ))}
        </div>
      </div>
      <NavLink to="/" href="" className="ms-5">
        {" "}
        back to home page
      </NavLink>
    </div>
  );
};

export default LoadData;
