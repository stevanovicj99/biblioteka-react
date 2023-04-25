import React, { useState } from "react";
import OneBook from "../components/OneBook";
import Row from "react-bootstrap/Row";
import { InputGroup, Form } from "react-bootstrap";
import { useMemo, useEffect } from "react";
import debouce from "lodash.debounce";
import { BsSearchHeart } from "react-icons/bs";
import Pagination from "../components/Pagination";

const Home = ({
  books,
  rentBook,
  search,
  currentPage,
  setCurrentPage,
  numberOfBooks,
}) => {
  const debouncedResults = useMemo(() => {
    return debouce(search, 300);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  useEffect(() => {
    return () => {
      scrollToTop();
    };
  }, [currentPage]);

  return (
    <div className="all-books">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <BsSearchHeart />
        </InputGroup.Text>
        <Form.Control placeholder="Search" onChange={debouncedResults} />
      </InputGroup>
      <Row className="row">
        {books
          .filter(
            (book, index) =>
              (index >= currentPage * 10 - 10) & (index < currentPage * 10)
          )
          .map((book) => (
            <OneBook book={book} key={book.id} rentBook={rentBook} />
          ))}
      </Row>
      <Pagination
        className="pagination"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfBooks={numberOfBooks}
      ></Pagination>
    </div>
  );
};

export default Home;
