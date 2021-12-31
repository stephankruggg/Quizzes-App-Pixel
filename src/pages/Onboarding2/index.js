import React from 'react';
import { SafeAreaView, Image, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './style'

export default function Onboarding1({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle='dark-content'/>
        <TouchableOpacity style={styles.SkipButton} onPress={() => navigation.navigate('Entrar')}>
            <Text style={styles.SkipText}>Skip</Text>
        </TouchableOpacity>
        <Image
            source={require('./assets/HandsBook.png')}
            style={styles.MainImage}
        />
        <Text style={styles.FirstText}>Diversos assuntos para você</Text>
        <Text style={styles.SecondText}>São vários quizzes diferentes para você. Escolha um e se aventure!</Text>
        <View style={styles.ViewBalls}>
            <View style={styles.ViewFirst}></View>
            <View style={styles.ViewCurrent}></View>
            <View style={styles.ViewThird}></View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Onboarding3')} style={styles.BotaoAvancar}>
            <Text style={styles.FraseBotao}>Avançar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}