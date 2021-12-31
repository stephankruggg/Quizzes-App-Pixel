import React from 'react';
import { SafeAreaView, Image, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './style'

export default function Onboarding1({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle='dark-content'/>
        <TouchableOpacity style={styles.SkipButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.SkipText}>Skip</Text>
        </TouchableOpacity>
        <Image
            source={require('./assets/AlluraGiantPhone.png')}
            style={styles.MainImage}
        />
        <Text style={styles.FirstText}>Aprenda a qualquer hora e em qualquer lugar</Text>
        <Text style={styles.SecondText}>Tenha em suas mãos perguntas sobre os mais variados assuntos e aprenda errando!</Text>
        <View style={styles.ViewBalls}>
            <View style={styles.ViewCurrent}></View>
            <View style={styles.ViewOthers}></View>
            <View style={styles.ViewOthers}></View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Onboarding2')} style={styles.BotaoAvancar}>
            <Text style={styles.FraseBotao}>Avançar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}