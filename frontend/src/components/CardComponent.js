import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import bg from "../assets/bg.jpg";

const CardComponent = ({ onClick, withHover }) => {
  return (
    <div>
      <Card
        onClick={onClick}
        sx={{
          maxWidth: 150,
          ...(withHover && {
            transition: "transform 0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              cursor: "pointer",
            },
          }),
        }}
      >
        <CardMedia component="img" height="200" image={bg} />
      </Card>
    </div>
  );
};

export default CardComponent;
