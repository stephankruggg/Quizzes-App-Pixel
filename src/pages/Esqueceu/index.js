import React from 'react';
import { SafeAreaView, Image, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 

import styles from './style'

export default function Esqueceu({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle='dark-content'/>
        <TouchableOpacity onPress={() => navigation.navigate('Entrar')} style={styles.Back}>
            <AntDesign name="left" size={15} color="black" />
        </TouchableOpacity>
        <Text style={styles.Title}>Recuperar senha</Text>
        <TextInput style={styles.Input} placeholder='Digite seu endereço de e-mail'></TextInput>
        <TouchableOpacity style={styles.BotaoEnviar}>
            <Text style={styles.FraseBotao}>Enviar e-mail</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}