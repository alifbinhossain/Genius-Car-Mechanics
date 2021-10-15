import React from "react";
import { Card } from "react-bootstrap";

const Expert = ({ expert }) => {
  const { img, name } = expert;
  console.log(expert);
  return (
    <Card>
      <Card.Img
        variant="top"
        src={img}
        style={{
          height: "200px",
          objectFit: "cover",
          objectPosition: "top center",
        }}
      />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Expert;
