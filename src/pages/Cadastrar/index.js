import React from 'react';
import { SafeAreaView, Image, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 

import styles from './style'

export default function Cadastrar({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle='dark-content'/>
        <TouchableOpacity onPress={() => navigation.navigate('Entrar')} style={styles.Back}>
            <AntDesign name="left" size={15} color="black" />
        </TouchableOpacity>
        <Text style={styles.Title}>Cadastre-se</Text>
        <Text style={styles.SubTitle}>Crie uma conta gratuitamente</Text>
        <TextInput style={styles.Input} placeholder='Nome'></TextInput>
        <TextInput style={styles.Input} placeholder='E-mail'></TextInput>
        <TextInput style={styles.Input} placeholder='Senha'></TextInput>
        <TouchableOpacity style={styles.BotaoCadastrar} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.FraseBotao}>Cadastrar-se</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Entrar')} style={styles.EntrarButton}>
            <Text style={styles.EntrarButtonText}>Entrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}