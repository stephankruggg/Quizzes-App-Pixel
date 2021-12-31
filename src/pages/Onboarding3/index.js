import React from 'react';
import { SafeAreaView, Image, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './style'

export default function Onboarding3({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle='dark-content'/>
        <TouchableOpacity style={styles.SkipButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.SkipText}>Skip</Text>
        </TouchableOpacity>
        <Image
            source={require('./assets/CoolKidsHighTech.png')}
            style={styles.MainImage}
        />
        <Text style={styles.FirstText}>Melhore suas habilidades</Text>
        <Text style={styles.SecondText}>Memorize os conteúdos do aplicativo e melhore suas habilidades!</Text>
        <View style={styles.ViewBalls}>
            <View style={styles.ViewFirst}></View>
            <View style={styles.ViewSecond}></View>
            <View style={styles.ViewCurrent}></View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Entrar')} style={styles.BotaoAvancar}>
            <Text style={styles.FraseBotao}>Vamos lá!</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}