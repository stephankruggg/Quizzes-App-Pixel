import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';

export default function Profile({navigation}) {
  return (
    <View>
      <Text style={styles.Title}>Profile</Text>
      <TouchableOpacity style={styles.HistButton}><Text>Seu histórico</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.AboutButton}><Text>Sobre o app</Text></TouchableOpacity>
    </View>
  );
}