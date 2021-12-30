import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';

export default function Profile() {
  return (
    <View>
      <Text style={styles.Title}>Profile</Text>
      <TouchableOpacity style={styles.HistButton}><Text>Seu histórico</Text></TouchableOpacity>
      <TouchableOpacity style={styles.AboutButton}><Text>Sobre o app</Text></TouchableOpacity>
    </View>
  );
}