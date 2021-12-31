import { React, useState }from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, Image } from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import styles from './style';

export default function HTMLContent({navigation}) {
  const first = '<h5>'
  const second = '<p>'
  const third = '<h1>'

  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [APressed, setAPressed] = useState(false);
  const [BPressed, setBPressed] = useState(false);
  const [CPressed, setCPressed] = useState(false);
  const [nextPage, setNextPage] = useState('Erro')

  const buttonAPressed = () => {
    setButtonEnabled(false);
    setAPressed(true);
  }

  const buttonBPressed = () => {
    setButtonEnabled(false);
    setBPressed(true);
  }

  const buttonCPressed = () => {
    setButtonEnabled(false);
    setCPressed(true);
    setNextPage('Acerto');
  }

  const picture = require('./assets/Test Question Image.png')

  if (buttonEnabled) {
    return (
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity disabled={!buttonEnabled} onPress={() => navigation.navigate('HTMLQuiz')} style={styles.Back}>
            <AntDesign name="left" size={15} color="black" />
          </TouchableOpacity>
          <Text style={styles.NumeroPergunta}>1 de 1</Text>
          <Text style={styles.Pergunta}>Qual tag é usada para fazer títulos grandes?</Text>
          <Image
          style={styles.Imagem}
          source={picture}></Image>
          <TouchableOpacity disabled={!buttonEnabled} onPress={buttonAPressed} style={!APressed ? styles.BotaoResposta : styles.ErradoBotaoResposta}>
            <Text style={styles.TextoResposta}>A.     {first}</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={!buttonEnabled} onPress={buttonBPressed} style={!BPressed ? styles.BotaoResposta : styles.ErradoBotaoResposta}>
            <Text style={styles.TextoResposta}>B.     {second}</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={!buttonEnabled} onPress={buttonCPressed} style={!CPressed ? styles.BotaoResposta : styles.CertoBotaoResposta}>
            <Text style={styles.TextoResposta}>C.     {third}</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
      )
  } else {
    return (
      <SafeAreaView>
      <ScrollView>
        <TouchableOpacity disabled={!buttonEnabled} onPress={() => navigation.navigate('HTMLQuiz')} style={styles.Back}>
          <AntDesign name="left" size={15} color="black" />
        </TouchableOpacity>
        <Text style={styles.NumeroPergunta}>1 de 1</Text>
        <Text style={styles.Pergunta}>Qual tag é usada para fazer títulos grandes?</Text>
        <Image
        style={styles.Imagem}
        source={picture}></Image>
        <TouchableOpacity disabled={!buttonEnabled} onPress={buttonAPressed} style={!APressed ? styles.BotaoResposta : styles.ErradoBotaoResposta}>
          <Text style={styles.TextoResposta}>A.     {first}</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={!buttonEnabled} onPress={buttonBPressed} style={!BPressed ? styles.BotaoResposta : styles.ErradoBotaoResposta}>
          <Text style={styles.TextoResposta}>B.     {second}</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={!buttonEnabled} onPress={buttonCPressed} style={!CPressed ? styles.BotaoResposta : styles.CertoBotaoResposta}>
          <Text style={styles.TextoResposta}>C.     {third}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(nextPage)} style={styles.BotaoContinuar}>
          <Text style={styles.TextoContinuar}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
    )
  }
}