import React from 'react';
import './ArrowMore.css';

const ArrowMore = ({ direction, active }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`icon ${direction} ${active && 'active'}`}
    >
      <path
        className="secondary"
        fillRule="evenodd"
        d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
      />
    </svg>
  );
};

export default ArrowMore;
