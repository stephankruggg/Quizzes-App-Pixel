import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import styles from './style'
export default function Quizzes({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.Visualization}>
        <TouchableOpacity onPress={() => navigation.navigate('HTMLQuiz')} style={styles.Back}>
          <AntDesign name="left" size={15} color="black" />
        </TouchableOpacity>
        <Text style={styles.Title}>Resultados</Text>
      </View>
        <Text style={styles.Result}>0/1</Text>
        <Text style={styles.SecondTitle}>Quase lá...</Text>
        <Text style={styles.Texticle}>Continue estudando e tentando, uma hora você vai gabaritar! Eu acredito em você!</Text>
        <TouchableOpacity style={styles.Finish} onPress={() => navigation.navigate('HTMLQuiz')} >
          <Text style={styles.TextFinish}>Finalizar</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}