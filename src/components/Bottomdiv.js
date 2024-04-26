import React from "react";
import car from "../assets/blueperson.png";
import "../styles/bottomdiv.css";
import "../index.css";
import dot from "../assets/icondot.png";
const Bottomdiv = () => {
  return (
    <div>
      <p className="Heading">Recently Logged In Vistors</p>
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
    icon: dot,
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
              <img src={car} width={500} height={300} alt="imageh" />
            </td>
            <td id="rowb">
              <span>
                {item.name}
                <br />
                <span style={{ color: "#a5b7d6" }}>{item.id}</span>
              </span>
            </td>

            <td id="rowb">{item.place}</td>
            <td id="rowb">{item.description}</td>
            <td id="rowb">{item.time}</td>
            <td id="rowb">
              <img src={dot} width={200} height={200} alt="icon" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
