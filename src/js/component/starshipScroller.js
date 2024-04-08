import React from "react";
import starshipCard from "./starshipCard";
import "../../styles/home.css";
const starshipScroller = () => {
  return (
    <div className="container">
      <div className="">
        <div className="">
          <starshipCard />
        </div>
      </div>
    </div>
  );
};
export default starshipScroller;