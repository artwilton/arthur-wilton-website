import React from "react";

import Card from "react-bootstrap/Card";

const styles = {
  font: {
    fontSize: '2.2rem',
    fontWeight: '700'
  },
  gradient: {
    background: `linear-gradient(to top, rgba(0, 0, 0, 0.5), 90%, transparent)`
  },
  // shadow: {
  //   boxShadow: `1px 3px 1px #9E9E9E`
  // }
};

function HomeAboutCard(props) {
  return (
    <Card className="border-0 text-white">
      <Card.Img src={props.thumbnail} alt={props.alt} />
      <Card.ImgOverlay style={styles.gradient} className="d-flex flex-column">
        <Card.Title style={styles.font} className="my-auto text-center">{props.title}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}

export default HomeAboutCard;
