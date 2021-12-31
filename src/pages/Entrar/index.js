import React from 'react';
import { SafeAreaView, Image, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './style'

export default function Entrar({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle='dark-content'/>
        <Text style={styles.Title}>Entrar</Text>
        <TextInput style={styles.Input} placeholder='E-mail'></TextInput>
        <TextInput style={styles.Input} placeholder='Senha'></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate('Esqueceu')} style={styles.ForgetCreateButton}>
            <Text style={styles.ForgetCreateText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BotaoEntrar} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.FraseBotao}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')} style={styles.ForgetCreateButton}>
            <Text style={styles.ForgetCreateText}>Criar uma conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}