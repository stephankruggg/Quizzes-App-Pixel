import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import styles from './style';
import { AntDesign } from '@expo/vector-icons';

export default function About({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.Visualization}>
        <TouchableOpacity onPress={() => navigation.navigate('Home', {screen: 'Perfil'})} style={styles.Back}>
          <AntDesign name="left" size={15} color="black" />
        </TouchableOpacity>
        <Text style={styles.Title}>Sobre o app</Text>
      </View>
      <Image
      style={styles.Logo}
      source={require("./assets/illustration.png")}
      ></Image>
      <Text style={styles.Name}>PixelQuizzes</Text>
      <Text style={styles.Content}>O PixelQuizzes é um aplicativo criado para facilitar o aprendizado de conteúdos que nem sempre são os melhores de se aprender. Através da nossa plataforma, prometemos facilitar a sua aprendizagem em conceitos dos mais variados tipos. Isso se dá pelo fato de usarmos uma metodologia inovadora para aprendizagem!</Text>
    </SafeAreaView>
  );
}