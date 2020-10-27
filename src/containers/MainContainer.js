import React from 'react';
import Character from '../components/character/Character';
import Switch from '../components/switch/Switch';
import Pagination from '../components/pagination/Pagination';
import { useCharacter, useTheme, useDispatch} from '../hooks/appContext';

const MainContainer = () => {


  character = useCharacter()
  theme = useTheme();
   dispatch = useDispatch();

  return (
    <>
      <Character theme={theme} character={character}/>
      <Switch dispatch={dispatch}/>
      <Pagination dispatch={dispatch}/>
    </>
  );
};
export default MainContainer;