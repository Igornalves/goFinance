import React from 'react';
import { 
  Conteiner, 
  Titule,
  ButtomView,
} from './style';
import { ButtomProps } from '../../../global/others/Interface';

export function Buttom({titule, ...rest}: ButtomProps) {
  return (
      <Conteiner>
        <ButtomView {...rest}>
          <Titule>
            {titule}
          </Titule>
        </ButtomView>
      </Conteiner>
  );
}
