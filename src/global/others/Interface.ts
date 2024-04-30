import { TouchableOpacityProps } from "react-native";

export interface ButtomProps extends TouchableOpacityProps{
    titule: string
}

export interface dateCard {
    type: 'up' | 'down' | 'total';
    title: string;
    amount: string;
    lastTransaction: string;
}

export interface TypeProps {
    type: 'up' | 'down' | 'total';
}

export interface PropsHighLigthCard {
    dateCard: dateCard,
}

export interface CategoryProps {
    name: string;
    icon: string;
};

export interface TransactionsCardProps {
    type: 'positivo' | 'negativo';
    title: string;
    amount: string;
    category: CategoryProps;
    data: string; 
}

export interface propsDate { 
    date: TransactionsCardProps;
};

export interface TransactionsTypeProps {
    type: 'positivo' | 'negativo';
}

export interface ItemsProps {
    item: TransactionsCardProps
}

export interface DataListProps extends TransactionsCardProps {
    id: string;
} 