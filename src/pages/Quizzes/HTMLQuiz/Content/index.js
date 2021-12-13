import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';

import styles from './style'
export default function Quizzes() {
  return (
    <View>
        <Text>1 de 1</Text>
        <Text>Qual tag é usada para fazer títulos grandes?</Text>
        <Image
        source={'./images/Text Question Image.png'}></Image>
        <TouchableOpacity>A.  </TouchableOpacity>
        <TouchableOpacity>B.  </TouchableOpacity>
        <TouchableOpacity>C.  </TouchableOpacity>
        <TouchableOpacity>Continuar</TouchableOpacity>
    </View>
      
  );
}