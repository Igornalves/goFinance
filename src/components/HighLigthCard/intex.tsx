import React from 'react';

import { 
    Conteiner,
    Header,
    Titule,
    Icon,
    Footer,
    Amount,
    LastTransaction,
 } from './style';

export function HighLigthCard() {
  return (
    <Conteiner>
        <Header>
            <Titule> Entrada </Titule>
            <Icon name='arrow-up-circle'/>
        </Header>
        <Footer>
            <Amount>R$ 17.400,00</Amount>
            <LastTransaction>Última entrada dia 13 de Abril</LastTransaction>
        </Footer>
    </Conteiner>
  );
}