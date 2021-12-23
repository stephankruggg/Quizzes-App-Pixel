import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './style'
export default function Quizzes() {
  return (
    <View>
        <Text style={styles.Title}>Resultados</Text>
        <Text style={styles.Result}>1/1</Text>
        <Text style={styles.SecondTitle}>Você é um mestre!</Text>
        <Text style={styles.Texticle}>Você concluiu o quiz com sucesso e acertou todas as perguntas. Você é realmente muito bom!</Text>
        <TouchableOpacity style={styles.Finish}>Finalizar</TouchableOpacity>
    </View>
      
  );
}