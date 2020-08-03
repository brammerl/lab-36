import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useCharacter = () => {
  const { state } = useContext(AppContext);
  return state.character;
}

export const useTheme = () => {
  const { state } = useContext(AppContext);
  return state.theme;
}

export const useDispatch = () => {
  const { dispatch} = useContext(AppContext);
  return dispatch;
}
export const usePagination = () => {
  const { state } = useContext(AppContext);
  return state.page;
}