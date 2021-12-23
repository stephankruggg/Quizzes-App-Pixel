import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './style'
export default function Quizzes() {
  return (
    <View>
        <Text style={styles.Title}>Resultados</Text>
        <Text style={styles.Result}>0/1</Text>
        <Text style={styles.SecondTitle}>Quase lá...</Text>
        <Text style={styles.Texticle}>Continue estudando e tentando, uma hora você vai gabaritar! Eu acredito em você!</Text>
        <TouchableOpacity style={styles.Finish}>Finalizar</TouchableOpacity>
    </View>
      
  );
}