import React from 'react';
import { Titule } from '../pages/MainPage/style';

interface props {
  titule: string
}

export function Welcome({titule}: props) {
  return (
       <Titule>
          {titule}
       </Titule>
  );
}
