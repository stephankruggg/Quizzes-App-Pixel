import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './style'

export default function Quizzes() {
  return (
    <View>
      <Text style={styles.Hello}>Hello,</Text>
      <Text style={styles.Nome}>Juana Antonieta</Text>
      <TextInput></TextInput>
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
  );
}