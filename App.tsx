import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from "./src/Routes/app.routes";
import {
  useFonts, // hook de fonte
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

import { GestureHandlerRootView } from "react-native-gesture-handler";

// é recomendado chamar isso no escopo global sem esperar, em vez de dentro dos componentes ou ganchos do React, caso contrário, isso pode ser chamado tarde demais, quando a tela inicial já estiver oculta.

SplashScreen.preventAutoHideAsync(); // Prevenir que a tela de splash seja ocultada automaticamente enquanto as fontes estão carregando

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return console.log('As fontes ainda estão carregando...');
  } else {
    // Ocultar a tela de splash quando as fontes estiverem carregadas
    SplashScreen.hideAsync(); 
    console.log('As fontes ja foram completamente carragadas !!!');
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <GestureHandlerRootView style={{flex: 1}}>
            <AppRoutes/>
          </GestureHandlerRootView>
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar barStyle={"default"} />
    </>
  );
}
