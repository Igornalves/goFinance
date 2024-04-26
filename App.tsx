import React from "react";
import { StatusBar } from "react-native";
import { MainPage } from "./src/pages/MainPage/intex";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts, // hook de fonte
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

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
    SplashScreen.hideAsync(); // Ocultar a tela de splash quando as fontes estiverem carregadas
    console.log('As fontes ja foram completamente carragadas !!!');
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
      <StatusBar barStyle={"default"} />
    </>
  );
}
