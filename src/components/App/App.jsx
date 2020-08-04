import React from 'react';
import Character from '../character/Character';
import Switch from '../switch/Switch';
import Pagination from '../pagination/Pagination';
import { useCharacter, useTheme, useDispatch, usePagination } from '../../hooks/appContext';

export default function App() {
  const character = useCharacter()
  const theme = useTheme();
  const dispatch = useDispatch();
  
  return (
  <>
      <Character theme={theme} character={character}/>
      <Switch dispatch={dispatch}/>
      <Pagination dispatch={dispatch}/>
    </>
  )
}
  