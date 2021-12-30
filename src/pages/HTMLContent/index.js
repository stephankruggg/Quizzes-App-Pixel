import React from 'react';
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';

import styles from './style';

export default function HTMLContent() {
  const first = '<h5>'
  const second = '<p>'
  const third = '<h1>'

  const picture = require('./images/Test Question Image.png')

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.NumeroPergunta}>1 de 1</Text>
        <Text style={styles.Pergunta}>Qual tag é usada para fazer títulos grandes?</Text>
        <Image
        style={styles.Imagem}
        source={picture}></Image>
        <TouchableOpacity style={styles.BotaoResposta}>
          <Text style={styles.TextoResposta}>A.     {first}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BotaoResposta}>
          <Text style={styles.TextoResposta}>B.     {second}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BotaoResposta}>
          <Text style={styles.TextoResposta}>C.     {third}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BotaoContinuar}>
          <Text style={styles.TextoContinuar}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
      
  );
}