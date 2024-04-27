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

 const icon = {
   up: 'arrow-up-circle',
   down: 'arrow-down-circle',
   total: 'dollar-sign'
 }

 interface dateCard {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
  lastTransaction: string;
 }
 
 interface Props {
  dateCard: dateCard,
 }


export function HighLigthCard({ dateCard } : Props) {
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