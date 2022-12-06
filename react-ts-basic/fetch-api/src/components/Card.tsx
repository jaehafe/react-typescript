import React from 'react';
// Styles
import { Wrapper, StyledGender } from './Card.styles';

type CardProps = {
  name: string;
  imgUrl: string;
  gender: string;
};

const Card = ({ name, imgUrl, gender }: CardProps) => (
  <Wrapper>
    <p>{name}</p>
    <img src={imgUrl} alt="character-thumb" />
    <StyledGender color="green" gender={gender} />
  </Wrapper>
);

export default Card;
