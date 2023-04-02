import React from "react";
import OneBook from "../components/OneBook";
import Row from "react-bootstrap/Row";
import { InputGroup, Form } from "react-bootstrap";
import { useMemo, useEffect } from "react";
import debouce from "lodash.debounce";
import { BsSearchHeart } from "react-icons/bs";

const Home = ({ books, rentBook, search }) => {
  const debouncedResults = useMemo(() => {
    return debouce(search, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <div className="all-books">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <BsSearchHeart />
        </InputGroup.Text>
        <Form.Control placeholder="Search" onChange={debouncedResults} />
      </InputGroup>
      <Row>
        {books.map((book) => (
          <OneBook book={book} key={book.id} rentBook={rentBook} />
        ))}
      </Row>
    </div>
  );
};

export default Home;
