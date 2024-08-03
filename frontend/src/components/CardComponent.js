import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import bg from "../assets/bg.jpg";
const CardComponent = () => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 150,
          transition: "transform 0.3s", 
          "&:hover": {
            transform: "translateY(-5px)", 
            cursor: "pointer",
          },
        }}
      >
        <CardMedia component="img" height="200" image={bg} />
      </Card>
    </div>
  );
};

export default CardComponent;
