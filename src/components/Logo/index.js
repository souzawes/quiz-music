/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function Logo(props) {
  return (
    <img src={props.logoImage} alt="Musica Brasileira Quiz" />
  );
}

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
    width: 175px;
    height: 78px;
  }
`;

export default QuizLogo;
