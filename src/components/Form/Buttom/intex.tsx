import React from 'react';
import { Conteiner, Titule } from './style';
import { ButtomProps } from '../../../global/others/Interface';

export function Buttom({titule, ...rest}: ButtomProps) {
  return (
    <Conteiner {...rest}>
        <Titule>
            {titule}
        </Titule>
    </Conteiner>
  );
}
