import React from "react";
import "../styles/Sidediv.css";
import { Button } from "react-bootstrap";
const Sidediv = () => {
  return (
    <div className="container1">
      <h1>FON TEBOH</h1>
      <hr />
      <p className="word" style={{ color: "blue" }}>
        Dashboard
      </p>
      <p className="word">Vistors</p>
      <p className="word">Vehicles</p>
      <p className="word">Reports</p>
      <p className="word">Setting</p>
      <div className="pox">
        <Button className="docu">Documentation</Button>
      </div>
      <p className="word word1" style={{ color: "red" }}>
        Log out
      </p>
    </div>
  );
};

export default Sidediv;
