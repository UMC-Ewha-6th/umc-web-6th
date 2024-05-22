import React from "react";
import styled from "styled-components";

const Pagination = ({ total_pages, current_page, onPageChange }) => {
  return (
    <PaginationContainer>
      <Button
        disabled={current_page === 1}
        onClick={() => onPageChange(current_page - 1)}
      >
        &lt;
      </Button>
      <PageNumber>{current_page}</PageNumber>
      <Button
        disabled={current_page === total_pages}
        onClick={() => onPageChange(current_page + 1)}
      >
        &gt;
      </Button>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 200px;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px;
  margin: 0 5px;
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: transparent;
    color: #575868;
  }
`;

const PageNumber = styled.span`
  margin: 0 10px;
  font-size: 18px;
  color: white;
`;

export default Pagination;
