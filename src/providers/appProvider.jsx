import React, { useReducer, useEffect } from 'react';
import { AppContext } from '../hooks/appContext';
import reducer, { initialState } from '../reducers/appReducer';
import { getAllCharacters } from '../services/fetchCharacter';

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getAllCharacters(state.page)
      .then(character => dispatch({type: 'SET_CHARACTER', payload: character}));
  }, [state.page]);

  return(
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;