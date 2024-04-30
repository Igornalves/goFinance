import styled from "styled-components/native";
import theme from '../../global/styles/theme';
import { RFValue } from "react-native-responsive-fontsize";

export const Conteiner = styled.View`
    flex: 1;
    background-color: ${theme.colors.background};
`;

export const Header = styled.View`
    background-color: ${theme.colors.primary};
    width: 100%;
    height: ${RFValue(113)}px;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: ${RFValue(20)}px;
`;

export const Titule = styled.Text`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.shepe};
    font-size: ${RFValue(18)}px;
`;


export const Form = styled.View`
    flex: 1;
    width: 100%;
    padding: 24px;
`;