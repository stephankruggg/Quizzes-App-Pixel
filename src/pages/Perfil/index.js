import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { AntDesign } from '@expo/vector-icons';

export default function Profile({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.Visualization}>
        <TouchableOpacity onPress={() => navigation.navigate('Home', {screen: 'Quizzes'})} style={styles.Back}>
          <AntDesign name="left" size={15} color="black" />
        </TouchableOpacity>
        <Text style={styles.Title}>Profile</Text>
      </View>
      <Image
        style={styles.Avatar}
        source={
            require('./assets/Avatar.png')
        }
        ></Image>
      <TouchableOpacity onPress={() => navigation.navigate('Historico')} style={styles.HistButton}>
        <Text style={styles.ButtonText}>Seu histórico</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.AboutButton}>
        <Text style={styles.ButtonText}>Sobre o app</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}