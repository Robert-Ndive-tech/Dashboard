import React from "react";
import "../../index.css";
import me from "../../assets/image1.png";
import profile from "../../assets/blueprofile.png";
import setting from "../../assets/bluesetting.png";
import bell from "../../assets/bell.png";
import search from "../../assets/search.png";
import Sidediv from "../Sidediv";

import "../../styles/Homediv.css";

import MyEntryStatisticsChart from "../../Test/graph56";
import Rightdiv from "../Rightdiv";
import Bottomdiv from "../Bottomdiv";
import Threebox from "../Threebox";
const Dashboard = () => {
  return (
    <div className="dash" style={{ display: "flex" }}>
      <div className="Top">
        <img
          src={me}
          alt="logo"
          width={180}
          height={60}
          className="image1"
          style={{ float: "left" }}
        />
        <div className="search-input">
          <img
            src={search}
            alt="logo"
            width={25}
            height={10}
            className="image"
            style={{ display: "inline-block", verticalAlign: "middle" }}
          />
          <input
            type="text"
            placeholder="Search...."
            name="my"
            style={{ display: "inline-block" }}
          />
        </div>
        <div style={{ float: "right" }} className="middle">
          {" "}
          <img
            src={bell}
            alt="logo"
            width={40}
            height={10}
            className="image"
            style={{ display: "inline-block", verticalAlign: "middle" }}
          />
          <img
            src={setting}
            alt="logo"
            width={40}
            height={10}
            className="image"
            style={{ display: "inline-block", verticalAlign: "middle" }}
          />
          <img
            src={profile}
            alt="logo"
            width={40}
            height={10}
            className="image"
            style={{ display: "inline-block", verticalAlign: "middle" }}
          />
          <p
            className="Heading"
            style={{ display: "inline-block", color: "black" }}
          >
            FON TEBOH
          </p>
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <Sidediv />
      </div>
      <div style={{ flex: 6, height: 1300 }} className="maindash">
        <div className="Tophead">
          <br />

          <p className="Heading">VVMS Dashboard</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 5 }}>
            <Threebox />
            <table className="table2">
              <tbody>
                <td></td>
              </tbody>
              <tbody>
                <td>
                  <div className="Box3">
                    <p className="Heading">Entry Statistics</p>
                    <div className="descripO">
                      <input type="radio" name="data" className="descrip" />
                      Visitors
                      <input
                        type="radio"
                        name="data"
                        className="descrip"
                        checked
                      />
                      Vehicles
                    </div>
                    <MyEntryStatisticsChart />
                  </div>
                </td>
                <td>
                  <div className="Box5">
                    <Rightdiv />
                  </div>
                </td>
              </tbody>
            </table>
          </div>
        </div>
        <div className="Box6">
          <Bottomdiv />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
