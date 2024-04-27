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

interface CategoryProps {
    name: string;
    icon: string;
};

interface date {
    title: string;
    amount: string;
    category: CategoryProps;
    data: string; 
}

interface props {
    date: date;
};

export function TransactionCard({date}:props) {
  return (
    <Conteiner>
        <Title>{date.title}</Title>
        <Amount>{date.amount}</Amount>
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
