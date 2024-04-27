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

import { PropsHighLigthCard } from '../../global/others/Interface';
import { icon } from '../../global/others/Objects';

export function HighLigthCard({ dateCard } : PropsHighLigthCard) {
  return (
    <Conteiner type={dateCard.type}>
        <Header>
            <Titule type={dateCard.type}>{dateCard.title}</Titule>
            <Icon name={icon[dateCard.type]} type={dateCard.type}/>
        </Header>
        <Footer>
            <Amount type={dateCard.type}>{dateCard.amount}</Amount>
            <LastTransaction type={dateCard.type}>{dateCard.lastTransaction}</LastTransaction>
        </Footer>
    </Conteiner>
  );
}