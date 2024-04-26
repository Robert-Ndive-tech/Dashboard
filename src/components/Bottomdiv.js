import React from "react";
import car from "../assets/car.png";
import "../styles/bottomdiv.css";

const Bottomdiv = () => {
  return (
    <div>
      <h1>Recently Logged In Vistors</h1>
      <MyTable />
    </div>
  );
};

export default Bottomdiv;

const data = [
  {
    image: car,
    name: "Tabe Lilan",
    time: "26/03/2024- 8:00AM",
    id: "IDCR11575950",
    place: "Small Soppo,Buea",
    description: "Visit for site seeing",
    icon: "i",
  },
  {
    image: car,
    name: "Maurice Sam",
    time: "26/03/2024- 8:00AM",
    id: "IDCR11575950",
    place: "Small Soppo,Buea",
    description: "Visit for site seeing",
    icon: "i",
  },
  {
    image: car,
    name: "Martin Ngwa",
    time: "26/03/2024- 8:00AM",
    id: "IDCR11575950",
    place: "Small Soppo,Buea",
    description: "Visit for site seeing",
    icon: "i",
  },
];

const MyTable = () => {
  return (
    <table>
      <thead>
        <tr></tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.name}>
            <td id="rowb">
              <img src={car} width={300} height={300} alt="imageh" />
            </td>
            <td id="rowb">
              <span>
                {item.name}
                <br />
                {item.id}
              </span>
            </td>

            <td id="rowb">{item.place}</td>
            <td id="rowb">{item.description}</td>
            <td id="rowb">{item.time}</td>
            <td id="rowb">{item.icon}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
