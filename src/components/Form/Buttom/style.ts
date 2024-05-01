import styled from 'styled-components/native';
import theme from '../../../global/styles/theme';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Conteiner = styled.View`
    border-radius: 10px;
    background-color: ${theme.colors.secundary};
`;

export const ButtomView = styled(RectButton)`
    width: 100%;
    align-items: center;
    padding: 18px;
`;

export const Titule = styled.Text`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.shepe};
`;


