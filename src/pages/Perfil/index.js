import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';

export default function Profile() {
  return (
    <View>
      <Text style={styles.Title}>Profile</Text>
      <Image
      style={styles.Avatar}
      source={{uri:"./assets/Avatar.png"}}
      ></Image>
      <TouchableOpacity style={styles.HistButton}>Seu histórico</TouchableOpacity>
      <TouchableOpacity style={styles.AboutButton}>Sobre o app</TouchableOpacity>
    </View>
  );
}