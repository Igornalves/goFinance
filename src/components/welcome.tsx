import React from 'react';
import {
 View,
 Text,
 StyleSheet
} from 'react-native'
// import { styles } from './styles'

interface props {
  titule: string
}

export function Welcome({titule}: props) {
  return (
    <View>
       <Text style={style.text}>
          {titule}
       </Text>
    </View>
  );
}

const style = StyleSheet.create({
    text: {
      color: "#fff"
    }
})
