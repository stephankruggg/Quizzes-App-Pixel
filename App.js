import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Quizzes from './src/pages/Quizzes';
import Perfil from './src/pages/Perfil';
import Configs from './src/pages/Configs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer
    sc
    >
      <Tab.Navigator>
        <Tab.Screen name="Quizzes" component={Quizzes}
        options={{
          headerShown:false
        }}/>
        <Tab.Screen name="Perfil" component={Perfil}
        options={{
          tabBarIcon: ({tintColor}) => (<Image 
            source={require('./src/assets/courses.png')}
            style={{width:'20', height:'20', tintColor: tintColor}} 
            />)
        }}/>
        <Tab.Screen name="Configs" component={Configs}
        options={{
          headerShown:false
        }}/>
      </Tab.Navigator>
     </NavigationContainer>
  );
}