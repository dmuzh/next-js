import React from 'react';
// import { Pagination } from '@mui/material';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.map((number) => (
        <button key={number} onClick={() => onPageChange(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;