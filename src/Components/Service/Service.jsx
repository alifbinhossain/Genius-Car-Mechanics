import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, photo_url, description, _id } = service;

  const url = `/service/${_id}`;
  return (
    <Card>
      <Card.Img
        variant="top"
        src={photo_url}
        style={{
          height: "250px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description.slice(0, 150)}.. <Link to={url}>see more</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Service;
