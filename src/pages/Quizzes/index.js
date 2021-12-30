import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';

import styles from './style'

export default function Quizzes({navigation}) {
  return (
    <View>
      <StatusBar barStyle='dark-content'/>
      <Text style={styles.Hello}>Hello,</Text>
      <Text style={styles.Nome}>Juana Antonieta</Text>
      <TextInput style={styles.Search} placeholder='Pesquisar quiz'></TextInput>
      <View style={styles.BigBlueButtonView}>
          <TouchableOpacity style={styles.BigBlueButton}>
            <Text style={styles.TextBigBlueButton}>#HTML</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BigBlueButton}>
            <Text style={styles.TextBigBlueButton}>#UX</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BigBlueButton}>
            <Text style={styles.TextBigBlueButton}>#Swift</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BigBlueButton}>
          <Text style={styles.TextBigBlueButton}>#UI</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
        onPress={() => navigation.navigate('HTMLQuiz')}
        >
          <Text>UI</Text>
          <Text>Questões sobre interface</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}