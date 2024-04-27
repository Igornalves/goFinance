import styled from 'styled-components/native'
import theme from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

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
    align-items: flex-start;
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    /* background-color: green; */
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${getStatusBarHeight(), RFValue(25)}px;
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
    padding-top: ${RFValue(5)}px;
    font-size: ${RFValue(13)}px;
    font-family: ${theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${theme.colors.shepe};
    font-size: ${RFValue(16)}px;
    font-family: ${theme.fonts.bold};
`;

export const Icon = styled(Feather)`
    color: ${theme.colors.secundary};
    font-size: ${RFValue(24)}px;
    padding-right: 24px;
`;

export const Transactions= styled.View`
    flex: 1%;
    padding: 0 24px;
    /* background-color: red; */
    margin-top: ${RFPercentage(11)}px;
`;


export const Title= styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${theme.fonts.regular};
    /* background-color: red; */
    margin-bottom: 16px;
`;

