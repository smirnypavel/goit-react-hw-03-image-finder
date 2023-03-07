import React from 'react';
import styled from './Button.module.css';

const LoadMore = ({ onLoadMore }) => {
  return (
    <button onClick={onLoadMore} className={styled.Button}>
      Load More
    </button>
  );
};

export default LoadMore;
