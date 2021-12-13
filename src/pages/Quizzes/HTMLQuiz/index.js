import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';

import styles from './style'
export default function Quizzes() {
  return (
    <View>
        <Text style={styles.Title}>HTML</Text>
        <Image
        style={styles.Cover}
        source={{
            uri:'./images/cover.png'
        }}
        ></Image>
        <TouchableOpacity style={styles.Dificuldade}>FÁCIL</TouchableOpacity>
        <Text style={styles.Sobre}>Sobre o Quiz</Text>
        <Text style={styles.Texto}>You can launch a new career in web development today by learning HTML and CSS. You don't need a computer science degree or expensive software. All you need is a computer, a bit of time, a lot of determination, and a teacher you trust.</Text>
        <Text style={styles.Perguntas}>Quantidade de Perguntas</Text>
        <Text style={styles.Respostas}>10</Text>
        <TouchableOpacity style={styles.Botao}>Fazer tentativa</TouchableOpacity>
    </View>
      
  );
}