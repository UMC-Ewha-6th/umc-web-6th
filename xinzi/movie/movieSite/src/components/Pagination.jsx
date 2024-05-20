import React from "react";
import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 10px 0px;
`;

const ArrowBtn = styled.button`
  font-size: 13px;
  padding: 15px;
  color: ${props => props.disabled ? "grey" : "white"};
  border: 0;
  background-color: transparent;
  cursor: ${props => props.disabled ? "default" : "pointer"};
`;

const Page = styled.span`
    width: 10px;
    color: white;
    font-size: 13px;
    text-align: center;
    padding: 15px;
`;

const Pagination = ({page, totalPages, onPageChange}) => {
    const goToPrevPage = () => {
        onPageChange(page - 1);
    }

    const goToNextPage = () => {
        onPageChange(page + 1);
    }

    return (
        <PaginationWrapper>
            <ArrowBtn disabled={page === 1} onClick={goToPrevPage}>&#9664;</ArrowBtn>
            <Page>{page}</Page>
            <ArrowBtn disabled={page === totalPages} onClick={goToNextPage}>&#9658;</ArrowBtn>
        </PaginationWrapper>
    );
};

export default Pagination;
