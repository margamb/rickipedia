import React from 'react';
import './Pagination.css';
import ArrowMore from './ArrowMore.js';

const Pagination = ({ resultsPage, totalPages, onPageUp, onPageDown }) => {
  return (
    <div className="pagination">
      {resultsPage !== 1 && (
        <span onClick={onPageDown}>
          <ArrowMore direction="left" />
        </span>
      )}
      <p>
        {resultsPage} of {totalPages}
      </p>
      {resultsPage !== totalPages && (
        <span onClick={onPageUp}>
          <ArrowMore direction="right" active />
        </span>
      )}
    </div>
  );
};

export default Pagination;
