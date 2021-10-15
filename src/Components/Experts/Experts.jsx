import React from "react";
import { Col, Row } from "react-bootstrap";
import img1 from "../../images/experts/experts-1.png";
import img2 from "../../images/experts/experts-2.png";
import img3 from "../../images/experts/experts-3.png";
import img4 from "../../images/experts/experts-4.png";
import img5 from "../../images/experts/experts-5.png";
import img6 from "../../images/experts/experts-6.png";
import Expert from "../Expert/Expert";
import "./Experts.css";

const Experts = () => {
  const experts = [
    { id: 1, name: "Donald G. Beale", img: img1 },
    { id: 2, name: "George B. Holman", img: img2 },
    { id: 3, name: "Frank S. Mathis", img: img3 },
    { id: 4, name: "Freda C. Altman", img: img4 },
    { id: 5, name: "Francisco K. Greiner", img: img5 },
    { id: 6, name: "Ryan M. Kirby", img: img6 },
  ];
  return (
    <div className="py-3" id="experts">
      <h1 className="text-center mb-3">Experts</h1>
      <div className="container">
        <Row xs={1} md={2} lg={3} className="g-3">
          {experts.map((expert) => (
            <Col>
              <Expert expert={expert} key={expert.id}></Expert>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Experts;
