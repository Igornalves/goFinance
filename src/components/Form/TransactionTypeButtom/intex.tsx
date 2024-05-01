import React from 'react';
import { 
    Conteiner,
    Icon,
    Title,
    ButtomView
} from './style';
import { TransactionTypeButtomProps } from '../../../global/others/Interface';
import { TransactionTypeButtomIcon } from '../../../global/others/Objects';

export function TransactionTypeButtom({title,type,...rest}: TransactionTypeButtomProps){
  return (
      <Conteiner >
        <ButtomView {...rest}>
          <Icon name={TransactionTypeButtomIcon[type]}/>
          <Title>
              {title}
          </Title>
        </ButtomView>
        
      </Conteiner>
  );
}
