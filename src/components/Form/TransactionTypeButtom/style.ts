import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import theme from '../../../global/styles/theme';
import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';
import { css } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { TypeIconsProps } from '../../../global/others/Interface';

export const Conteiner = styled.View`
    width: 48%;
    border: 1.5px solid ${theme.colors.text_dark};
    border-radius: 10px;
    /* border-width: 1px;
    border-style: solid;
    border-color: ${theme.colors.text}; */
    `;

export const ButtomView = styled(RectButton)`
    flex-direction: row;
    padding: 16px;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;
    
    ${({type}: TypeIconsProps) => type === 'up' && css`
        color: ${theme.colors.success};
    `};
    
    ${({type}: TypeIconsProps) => type ==='down' && css`
        color: ${theme.colors.attention};
    `};

`;

export const Title = styled.Text`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;
