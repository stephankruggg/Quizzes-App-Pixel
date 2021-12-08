import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Quizzes from './src/pages/Quizzes';
import Perfil from './src/pages/Perfil';
import Configs from './src/pages/Configs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Quizzes" component={Quizzes}/>
        <Tab.Screen name="Perfil" component={Perfil}/>
        <Tab.Screen name="Configs" component={Configs}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}