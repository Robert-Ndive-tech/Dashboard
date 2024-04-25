import React from "react";
import "../../index.css";
import me from "../../assets/image1.png";
const Dashboard = () => {
  return (
    <div className="dash">
      <div className="Top">
        <img
          src={me}
          alt="logo"
          width={180}
          height={60}
          className="image"
          style={{ float: "left" }}
        />
        <div className="search-input">
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Dashboard;
