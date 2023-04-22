import React from "react";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

function Pagination({ currentPage, setCurrentPage, numberOfBooks }) {
  const createPaginationItems = () => {
    let items = [];
    for (let i = 0; i < Math.ceil(numberOfBooks / 10); i++) {
      items.push(
        <MDBPaginationItem
          onClick={() => setCurrentPage(i + 1)}
          key={i}
          className={`${currentPage === i + 1 ? "active" : ""}`}
        >
          <MDBPaginationLink className="pag-item">{i + 1}</MDBPaginationLink>
        </MDBPaginationItem>
      );
    }
    return items;
  };
  return (
    <nav className="pagination">
      <MDBPagination className="mb-0">{createPaginationItems()}</MDBPagination>
    </nav>
  );
}

export default Pagination;
