import React from "react";
import "../styles/Sidediv.css";
import "../index.css";
import { Button } from "react-bootstrap";
import profile from "../assets/whiteprofile.png";
import Home from "../assets/home.png";
import pesorns from "../assets/person.png";
import motor from "../assets/motor.png";
import report from "../assets/network.png";
import setting from "../assets/settings.png";

const Sidediv = () => {
  return (
    <div className="container1">
      <div>
        <img
          src={profile}
          alt="profile"
          width={40}
          height={40}
          style={{ display: "inline-block", verticalAlign: "middle" }}
          className="inline"
        />
        <p className="Heading1 inline" style={{ display: "inline-block" }}>
          FON TEBOH
        </p>
      </div>
      <hr />
      <img
        src={Home}
        alt="profile"
        width={40}
        height={40}
        style={{ display: "inline-block", verticalAlign: "middle" }}
      />
      <p className="word inline" style={{ color: "blue" }}>
        Dashboard
      </p>
      <div>
        <img
          src={pesorns}
          alt="profile"
          width={40}
          height={40}
          style={{ display: "inline-block", verticalAlign: "middle" }}
        />
        <p className="word inline">Vistors</p>
      </div>
      <div>
        <img
          src={motor}
          alt="profile"
          width={40}
          height={40}
          style={{ display: "inline-block", verticalAlign: "middle" }}
        />
        <p className="word inline">Vehicles</p>
      </div>
      <div>
        <img
          src={report}
          alt="profile"
          width={40}
          height={40}
          style={{ display: "inline-block", verticalAlign: "middle" }}
        />
        <p className="word inline">Reports</p>
      </div>
      <div>
        <img
          src={setting}
          alt="profile"
          width={40}
          height={40}
          style={{ display: "inline-block", verticalAlign: "middle" }}
        />
        <p className="word inline i">Setting</p>
      </div>
      <br />

      <br />
      <br />
      <div className="pox">
        <Button className="docu">Documentation</Button>
      </div>

      <Button
        style={{
          backgroundColor: "white",
          color: "red",
          marginTop: "50px",
          marginLeft: "50px",
        }}
      >
        Log out
      </Button>
    </div>
  );
};

export default Sidediv;
