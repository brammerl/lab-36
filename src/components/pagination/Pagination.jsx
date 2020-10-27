import React from 'react';
import { useDispatch } from '../../hooks/appContext';

const Pagination = ({page, dispatch}) => {
  
  const increment = () => dispatch({type: 'ADD_PAGE'});
  const decrement = () => dispatch({type: 'SUB_PAGE'});

  return (
    <>
      Page: {page}
      <button onClick={decrement}>Prev</button>
      <button onClick={increment}>Next</button>
    </>
  )
};

export default Pagination;
