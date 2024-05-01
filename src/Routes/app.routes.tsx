import React from 'react';
import { Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainPage } from '../pages/MainPage/intex';
import { Register } from '../pages/PageForms/intex';
import theme from '../global/styles/theme';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
     return(
       <Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.colors.secundary,
            tabBarInactiveTintColor: theme.colors.text,
            tabBarLabelPosition: 'beside-icon',
            tabBarStyle: {
                height: 65,
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,

            }
        }}
       >
           <Screen
               name='Listagem'
               component={MainPage}
               options={{
                tabBarIcon: (({size, color}) => 
                   <MaterialIcons
                      name='format-list-bulleted'
                      size={size}
                      color={color}
                   />
                ),
               }}
           />
           <Screen
               name='Cadastrar'
               component={Register}
               options={{
                tabBarIcon: (({size, color}) => 
                   <MaterialIcons
                      name='attach-money'
                      size={size}
                      color={color}
                   />
                ),
               }}
           />
           <Screen
               name='Resumo'
               component={MainPage}
               options={{
                tabBarIcon: (({size, color}) => 
                   <MaterialIcons
                      name='pie-chart'
                      size={size}
                      color={color}
                   />
                ),
               }}
           />
       </Navigator>
     );
}
