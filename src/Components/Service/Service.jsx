import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, img, details, id } = service;

  const url = `/service/${id}`;
  return (
    <Card>
      <Card.Img
        variant="top"
        src={img}
        style={{
          height: "250px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {details.slice(0, 150)}.. <Link to={url}>see more</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Service;
