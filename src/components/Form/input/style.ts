import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../../global/styles/theme';

export const Conteiner = styled(TextInput)`
    width: 100%;
    padding: 16px 18px;
    font-size: ${RFValue(14)}px;
    background-color: ${theme.colors.shepe};
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text_dark};
    border-radius: 10px;
    margin-bottom: 8px;
`;
