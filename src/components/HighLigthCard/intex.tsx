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

 interface Props {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
  lastTransaction: string;
 }

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export function HighLigthCard({ type, title, amount, lastTransaction } : Props) {
  return (
    <Conteiner type={type}>
        <Header>
            <Titule type={type}> {title} </Titule>
            <Icon name={icon[type]} type={type}/>
        </Header>
        <Footer>
            <Amount type={type}> {amount} </Amount>
            <LastTransaction type={type}> {lastTransaction} </LastTransaction>
        </Footer>
    </Conteiner>
  );
}