import React from "react";
import OneBook from "../components/OneBook";
import Row from "react-bootstrap/Row";

function Rent({ books, rentBook }) {
  return (
    <div className="all-books">
      <Row>
        {books.map((book) => (
          <OneBook book={book} key={book.id} rentBook={rentBook} />
        ))}
      </Row>
    </div>
  );
}

export default Rent;
