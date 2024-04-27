import styled, { DefaultTheme } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import theme from "../../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { TransactionsTypeProps } from "../../global/others/Interface";
import { FlatList } from 'react-native';
import { DataListProps } from '../../global/others/Interface';

export const Conteiner = styled.View`
    background-color: ${theme.colors.shepe};
    border-radius: 5px;
    padding: 16px 24px;
    margin-bottom: ${getBottomSpace() + RFValue(14)}px;
`;

export const Title = styled.Text` 
    font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    color: ${({ type }: TransactionsTypeProps) => type === 'positivo' ? theme.colors.success : theme.colors.attention};
    margin-top: 2px;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;
`;

export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.text};
`;

export const CategoryName = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};
    margin-left: 17px;
`;

export const Data = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};
`;

export const TransationsList = styled(FlatList as new () => FlatList<DataListProps>).attrs({
    showsVerticalScrollIndicator: false
})`

`;