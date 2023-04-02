import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const OneBook = ({ book, rentBook }) => {
  return (
    <Col md={"3"} className="col">
      <Card className="card">
        <Card.Img variant="top" src={[book.imgURL]} className="card-img" />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Title className="author">{book.author}</Card.Title>
          <Card.Text>{book.description}</Card.Text>
        </Card.Body>

        <Button
          variant="primary"
          className="card-button"
          id="card-button-id"
          onClick={() => rentBook(book.id)}
        >
          {!book.isRented ? "Rent" : "Return"}
        </Button>
      </Card>
    </Col>
  );
};

export default OneBook;
