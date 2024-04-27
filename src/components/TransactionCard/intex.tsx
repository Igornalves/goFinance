import React from 'react';
import {
    Conteiner,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Data
 } from './style';
import { propsDate } from '../../global/others/Interface';

export function TransactionCard({date}:propsDate) {
  return (
    <Conteiner>
        <Title>{date.title}</Title>
        <Amount type={date.type}>
            { date.type === 'negativo' && "- " }
            {date.amount}
        </Amount>
        <Footer>
            <Category>
                <Icon name= {date.category.icon} />
                <CategoryName>{date.category.name}</CategoryName>
            </Category>
            <Data>{date.data}</Data>
        </Footer>
    </Conteiner>
  );
}
