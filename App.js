import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Quizzes from './src/pages/Quizzes';
import HTMLQuiz from './src/pages/HTMLQuiz';
import HTMLContent from './src/pages/HTMLContent'
import Acerto from './src/pages/Acerto'
import Erro from './src/pages/Erro'
import Perfil from './src/pages/Perfil';
import About from './src/pages/About'
import Configs from './src/pages/Configs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Quizzes" component={Quizzes}
        options={{
          headerShown:false
        }}/>
        <Tab.Screen name="Perfil" component={Perfil}
        options={{
          headerShown:false,
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
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Tabs} options={{headerShown: false}}/>
        <Stack.Screen name="HTMLQuiz" component={HTMLQuiz} options={{headerShown: false}} />
        <Stack.Screen name="HTMLContent" component={HTMLContent} options={{headerShown: false}}/>
        <Stack.Screen name="About" component={About} options={{headerShown: false}} />
        <Stack.Screen name="Acerto" component={Acerto} options={{headerShown: false}} />
        <Stack.Screen name="Erro" component={Erro} options={{headerShown: false}} />
      </Stack.Navigator>
     </NavigationContainer>
  );
}