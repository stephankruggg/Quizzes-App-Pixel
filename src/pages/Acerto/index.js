import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import styles from './style'
export default function Acerto({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.Visualization}>
        <TouchableOpacity onPress={() => navigation.navigate('HTMLQuiz')} style={styles.Back}>
          <AntDesign name="left" size={15} color="black" />
        </TouchableOpacity>
        <Text style={styles.Title}>Resultados</Text>
      </View>
        <Text style={styles.Result}>1/1</Text>
        <Text style={styles.SecondTitle}>Você é um mestre!</Text>
        <Text style={styles.Texticle}>Você concluiu o quiz com sucesso e acertou todas as perguntas. Você é realmente muito bom!</Text>
        <TouchableOpacity style={styles.Finish} onPress={() => navigation.navigate('HTMLQuiz')} >
          <Text style={styles.TextFinish}>Finalizar</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}