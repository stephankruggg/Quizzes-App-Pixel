import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Onboarding1 from './src/pages/Onboarding1';
import Onboarding2 from './src/pages/Onboarding2';
import Onboarding3 from './src/pages/Onboarding3';
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
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#82327E',
          tabBarLabelStyle: {
            fontSize: 14,
            marginBottom: 25,
            marginTop: 8
          },
          tabBarIconStyle: {
            marginTop: 18
          },
          tabBarStyle: {
            position: 'absolute',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            height: 90,
            borderColor: '#BEBAB3',
            borderWidth: 1
          }
        }}
      >
        <Tab.Screen name="Quizzes" component={Quizzes}
        options={{
          headerShown:false,
          tabBarIcon: ({focused}) => (<Image 
            source={require('./src/assets/courses.png')}
            style={{tintColor: focused ? '#82327E' : '#BEBAB3'}} 
            />)
        }}/>
        <Tab.Screen name="Perfil" component={Perfil}
        options={{
          headerShown:false,
          tabBarIcon: ({focused}) => (<Image 
            source={require('./src/assets/profile.png')}
            style={{tintColor: focused ? '#82327E' : '#BEBAB3'}} 
            />)
        }}/>
        <Tab.Screen name="Configs" component={Configs}
        options={{
          headerShown:false,
          tabBarIcon: ({focused}) => (<Image 
            source={require('./src/assets/configs.png')}
            style={{tintColor: focused ? '#82327E' : '#BEBAB3'}} 
            />)
        }}/>
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding1" component={Onboarding1} options={{headerShown: false}}/>
        <Stack.Screen name="Onboarding2" component={Onboarding2} options={{headerShown: false}}/>
        <Stack.Screen name="Onboarding3" component={Onboarding3} options={{headerShown: false}}/>
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