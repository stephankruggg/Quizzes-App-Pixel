import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';

export default function About() {
  return (
    <View>
      <Text style={styles.Title}>Sobre o app</Text>
      <Image
      style={styles.Logo}
      source={{uri:"./assets/illustration.png"}}
      ></Image>
      <Text style={styles.Name}>PixelQuizzes</Text>
      <Text style={styles.Content}>O PixelQuizzes é um aplicativo criado para facilitar o aprendizado de conteúdos que nem sempre são os melhores de se aprender. Através da nossa plataforma, prometemos facilitar a sua aprendizagem em conceitos dos mais variados tipos. Isso se dá pelo fato de usarmos uma metodologia inovadora para aprendizagem!</Text>
    </View>
  );
}