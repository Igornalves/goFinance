import { DataListProps, dateCard } from "./Interface";

export const TransactionTypeButtomIcon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
}

export const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-up-circle',
    total: 'dollar-sign'
}

export const date: DataListProps[] = [
    {
    id: '1',
    type: 'positivo',
    title: 'Desenvolvimento de Site',
    data: "08/04/2024",
    category: {
        name: 'Vendas',
        icon: 'dollar-sign'
    },
    amount: "R$ 12.000,00",
    },
    {
    id: '2',
    type: 'negativo',
    title: 'aluguel do apartamento',
    data: "18/04/2024",
    category: {
        name: 'Casa',
        icon: 'home'
    },
    amount: "R$ 1.200,00",
    },
    {
    id: '3',
    type: 'negativo' ,
    title: 'Hamburgueria Pizzy',
    data: "10/04/2024",
    category: {
        name: 'Alimentacao',
        icon: 'coffee'
    },
    amount: "R$ 15,00",
    },
];

export const dateCard1: dateCard = {
    type: "up",
    title: "Entradas",
    amount: "R$ 17.400,00",
    lastTransaction: "Última entrada dia 13 de abril",
};

export const dateCard2: dateCard = {
    type: "down",
    title: "Saídas",
    amount: "R$ 1.259,00",
    lastTransaction: "Última saída dia 03 de abril",
};

export const dateCard3: dateCard = {
    type: "total",
    title: "Total",
    amount: "R$ 16.141,00",
    lastTransaction: "01 à 16 de abril",
};