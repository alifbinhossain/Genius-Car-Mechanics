import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://immense-beach-13258.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="section-services py-3" id="services">
      <h1 className="text-center mb-4">Services</h1>
      <div className="container">
        <Row xs={1} md={2} lg={3} className="g-3">
          {services &&
            services.map((service) => (
              <Col>
                <Service service={service}></Service>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
