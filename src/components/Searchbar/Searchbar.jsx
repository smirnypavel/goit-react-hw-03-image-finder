import React from 'react';
// import PropTypes from 'prop-types';
import styled from './Searchbar.module.css';

const searchBar = ({ onChange }) => {
  return (
    <header className={styled.Searchbar}>
      <form className={styled.SearchForm}>
        <button type="submit" className={styled.SearchForm_button}>
          <span>Search</span>
        </button>

        <input
          className={styled.SearchForm_input}
          type="text"
          //   autocomplete="off"
          //   autofocus
          placeholder="Search images and photos"
          //   value={filter}
          //   onChange={({ target }) => onChange(target.value)}
        />
      </form>
    </header>
  );
};
export default searchBar;
