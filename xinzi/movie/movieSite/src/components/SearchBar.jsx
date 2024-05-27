import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 100%;
  max-width: 500px;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 23px;
  border-radius: 16.5px;
  border: none;
  padding: 5px 10px;
  margin-right: 10px;
`;

const SearchBar = ({ onSearch, onFocus, onBlur }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, onSearch]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  return (
    <SearchBarWrapper>
      <SearchForm>
        <SearchInput
          type="text"
          placeholder="검색"
          value={searchQuery}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleInputChange}
        />
        <SearchIcon onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faSearch} />
        </SearchIcon>
      </SearchForm>
    </SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

export default SearchBar;
