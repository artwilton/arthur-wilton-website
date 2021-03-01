import React from "react";

import Card from "react-bootstrap/Card";

function HomeAboutCard(props) {
  return (
    <Card id ="aboutCard" className="border-0 text-white">
      <Card.Img src={props.thumbnail} alt={props.alt} />
      <Card.ImgOverlay style={{background: `linear-gradient(to top, black, 50%, transparent)`}} className="d-flex flex-column">
        <Card.Title style={{fontSize: '2.5rem', fontWeight: '700'}} className="mt-auto text-center">{props.title}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}

export default HomeAboutCard;
