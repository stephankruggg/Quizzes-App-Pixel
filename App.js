import React from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons'; 
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
        <Tab.Screen name="Quizzes" component={Quizzes}
        options={{
          tabBarIcon: ({}) => (<AntDesign name="book" size={20} color="black"/>)
        }}/>
        <Tab.Screen name="Perfil" component={Perfil}
        options={{
          tabBarIcon: ({}) => (<Ionicons name="person" size={20} color="black"/>)
        }}/>
        <Tab.Screen name="Configs" component={Configs}
        options={{
          tabBarIcon: ({}) => (<Ionicons name="settings-outline" size={20} color="black"/>)
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}