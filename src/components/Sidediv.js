import React from "react";
import "../styles/Sidediv.css";
import { Button } from "react-bootstrap";
const Sidediv = () => {
  return (
    <div className="container1">
      FON TEBOH
      <hr />
      <p className="word">Dashboard</p>
      <p className="word">Vistors</p>
      <p className="word">Vehicles</p>
      <p className="word">Reports</p>
      <p className="word">Setting</p>
      <div className="pox">
        <Button className="docu">Documentation</Button>
      </div>
      <p className="word word1">Log out</p>
    </div>
  );
};

export default Sidediv;
