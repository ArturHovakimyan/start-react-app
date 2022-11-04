import React, { useState, useEffect, useCallback } from "react";
import "../pagination/style.css";

const Pagination = ({ handlePageClick, totalPages }) => {
  const [activeIndex, setActivInde] = useState(1);
  const [currentPage, setCurrentPage] = useState([1, 2, 3, 4, 5]);

  const onClick = useCallback(
    (page) => {
      setActivInde(page);
      handlePageClick(page);
    },
    [activeIndex]
  );
  useEffect(() => {
    if (activeIndex === currentPage[currentPage.length - 1] + 1) {
      setCurrentPage((prev) => prev.map((page) => page + 5));
    }
    if (activeIndex === currentPage[0] - 1) {
      setCurrentPage((prev) => prev.map((page) => page - 5));
    }
  }, [activeIndex]);

  return (
    <div className="paginationWrapper">
      <button
        disabled={activeIndex === 1}
        onClick={() => onClick(activeIndex - 1)}
      >
        Prev
      </button>
      {currentPage.map((page) => (
        <button
          className={activeIndex === page ? "active" : ""}
          style={{ margin: "10px" }}
          onClick={() => onClick(page)}
          key={page}
        >
          {page}
        </button>
      ))}
      <button onClick={() => onClick(activeIndex + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
