import React from "react";
import planetCard from "./planetCard";
import "../../styles/home.css";
const planetScroller = () => {
  return (
    <div className="container">
      <div className="">
        <div className="">
          <planetCard />
        </div>
      </div>
    </div>
  );
};
export default planetScroller;