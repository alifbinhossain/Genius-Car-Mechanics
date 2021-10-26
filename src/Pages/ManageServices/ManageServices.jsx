import React from "react";
import "./ManageServices.css";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const ManageServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://immense-beach-13258.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  //deleting a service

  const handleDelete = (id) => {
    const url = `https://immense-beach-13258.herokuapp.com/services/${id}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Service Removed");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };

  return (
    <div>
      <h1 className="text-center">Manage Services</h1>

      <Row md={3} xs={1} className="g-4 p-5 container">
        {services.map((service) => (
          <Col key={service._id}>
            <h5>Name : {service.name}</h5>
            <button onClick={() => handleDelete(service._id)}>Delete</button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ManageServices;
