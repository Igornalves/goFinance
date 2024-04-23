import styled from 'styled-components/native'
import theme from '../../global/styles/theme';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Conteiner = styled.SafeAreaView`
    flex: 1;
    background-color: ${theme.colors.background};
`;

export const Titule = styled.Text`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.bold};
    font-size: 13px;
`;

export const Header = styled.View`
    width: ${RFPercentage(13)}%;
    height: ${RFValue(278)}px;
    background-color: ${theme.colors.primary};
    justify-content: center;
    align-items: center;
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    background-color: green;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
    /* background-color: red; */
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: ${RFValue(17)}px;
`;

export const UserGreeting = styled.Text`
    color: ${theme.colors.shepe};
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${theme.colors.shepe};
    font-size: ${RFValue(18)}px;
    font-family: ${theme.fonts.bold};
`;
