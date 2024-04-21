import React from 'react';
import {
 View,
} from 'react-native'
import { Titule } from '../pages/MainPage/style';

interface props {
  titule: string
}

export function Welcome({titule}: props) {
  return (
    <View>
       <Titule>
          {titule}
       </Titule>
    </View>
  );
}
