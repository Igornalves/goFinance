import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import theme from "../../global/styles/theme";
import { css } from "styled-components";

interface TypeProps {
    type: 'up' | 'down' | 'total';
}

export const Conteiner = styled.View<TypeProps>`
    background-color: ${({ type }: TypeProps) => type === 'total' ? theme.colors.secundary: theme.colors.shepe};
    width: ${RFValue(278)}px;
    /* height: ${RFValue(200)}px; */
    border-radius: 10px;
    padding: 19px 23px;
    margin-right: 16px;
    padding-bottom: ${RFValue(36)}px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Titule = styled.Text`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    ${({type}: TypeProps) => type === 'total' && css`
        color: ${theme.colors.shepe};
    `};
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(40)}px;

    ${({type}: TypeProps) => type === 'up' && css`
        color: ${theme.colors.success};
    `};

    ${({type}: TypeProps) => type === 'down' && css`
        color: ${theme.colors.attention};
    `};

    ${({type}: TypeProps) => type === 'total' && css`
        color: ${theme.colors.shepe};
    `};
`;

export const Footer = styled.View`

`;

export const Amount = styled.Text`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    ${({type}: TypeProps) => type === 'total' && css`
        color: ${theme.colors.shepe};
    `};
    margin-top: 38px;
`;

export const LastTransaction = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${theme.fonts.regular};
    ${({type}: TypeProps) => type === 'total' && css`
        color: ${theme.colors.shepe};
    `};
`;


// usando as propriedades do elemento atravez do attrs 
export const HighLigthCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingLeft: 20 }
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(16)}px;
`;
