import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';

import styles from './style'
export default function Quizzes() {
  const first = '<h5>'
  const second = '<p>'
  const third = '<h1>'

  return (
    <View>
        <Text>1 de 1</Text>
        <Text>Qual tag é usada para fazer títulos grandes?</Text>
        <Image
        source={'./images/Text Question Image.png'}></Image>
        <TouchableOpacity
        onPress={}
        >
          A. {first} 
        </TouchableOpacity>
        <TouchableOpacity>
          B. {second}
        </TouchableOpacity>
        <TouchableOpacity>
          C. {third}
        </TouchableOpacity>
        <TouchableOpacity>Continuar</TouchableOpacity>
    </View>
      
  );
}