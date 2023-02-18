import React, { useState } from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <div className="search">
      <input
        className="searchInput"
        placeholder="Search"
        value={props.searchValue}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Search;
