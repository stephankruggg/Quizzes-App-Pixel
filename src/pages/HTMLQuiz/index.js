import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import styles from './style'

export default function HTMLQuiz({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.Visualization}>
          <TouchableOpacity onPress={() => navigation.navigate('Quizzes')} style={styles.Back}>
            <AntDesign name="left" size={15} color="black" />
          </TouchableOpacity>
          <Text style={styles.Title}>HTML</Text>
        </View>
        <Image
        style={styles.Cover}
        source={
            require('./assets/cover.png')
          }
        ></Image>
        <View style={styles.Dificuldade}>
          <Text style={styles.DificuldadeTexto}>FÁCIL</Text>
        </View>
        <Text style={styles.Sobre}>Sobre o Quiz</Text>
        <Text style={styles.Texto}>You can launch a new career in web development today by learning HTML and CSS. You don't need a computer science degree or expensive software. All you need is a computer, a bit of time, a lot of determination, and a teacher you trust.</Text>
        <Text style={styles.Perguntas}>Quantidade de Perguntas</Text>
        <Text style={styles.Respostas}>10</Text>
        <TouchableOpacity style={styles.Botao} onPress={() => navigation.navigate('HTMLContent')}>
          <Text style={styles.FraseBotao}>Fazer tentativa</Text>
        </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>    
  );
}