import styled, { DefaultTheme } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import theme from "../../global/styles/theme";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const Conteiner = styled.View`
    background-color: ${theme.colors.shepe};
    border-radius: 5px;
    padding: 17px 24px;
    margin-bottom: ${RFValue(11)}px;
`;

export const Title = styled.Text` 
    font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(20)}px;
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

export const TransationsList = styled.ScrollView.attrs({
    horizontal: false,
    showsVerticalScrollIndicator: false,
})`
    width: 100%;
`;