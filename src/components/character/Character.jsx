import React from 'react';
import { useCharacter, useTheme } from '../../hooks/appContext';
import styles from './Character.css';

const Character = () => {
  const character = useCharacter();
  const theme = useTheme();

  if(!character) return <h1>Loading!</h1>;

  const characterList = character.map(character => {
  return (<figure className={styles[`Character-${theme}`]}>
      <img src={character.photoUrl} alt={character.name}/>
      <figcaption>{character.name}</figcaption>
    </figure>)
  });

  return (
  <>
    {characterList}
  </>
  )
}

export default Character;