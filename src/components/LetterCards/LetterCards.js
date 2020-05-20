import React from 'react';

import LetterCard from './LetterCard/LetterCard'

const letterCards = (props) => props.userTextArray.map((letterObject, index) => {
  return (
    <LetterCard
      click={props.clicked}
      letter={letterObject.letter}
      key={letterObject.id}
      value={index} />
  )
});

export default letterCards;