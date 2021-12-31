import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

import styles from './style'

export default function Configs({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.Visualization}>
        <TouchableOpacity onPress={() => navigation.navigate('Home', {screen: 'Quizzes'})} style={styles.Back}>
          <AntDesign name="left" size={15} color="black" />
        </TouchableOpacity>
        <Text style={styles.Title}>Configurações</Text>
      </View>
      <Text style={styles.Description}>Informações da conta</Text>
      <TouchableOpacity style={styles.AllButtons}>
        <View style={styles.Visualization}>
        <View style={styles.IconView}>
          <Octicons name="person" size={18} color="white" />
        </View>
          <View>
            <Text style={styles.ButtonTitle}>Nome</Text>
            <Text style={styles.ButtonDescription}>Juana Antonieta</Text>
          </View>
          <AntDesign name="right" size={20} style={styles.Arrow} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.AllButtons}>
        <View style={styles.Visualization}>
        <View style={styles.IconView}>
          <Octicons name="person" size={18} color="white" />
        </View>
          <Text style={styles.ButtonProfile}>Foto de perfil</Text>
          <AntDesign name="right" size={20} style={styles.Arrow} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.AllButtons}>
        <View style={styles.Visualization}>
        <View style={styles.IconView}>
        <MaterialIcons name="email" size={18} color="white" />
        </View>
          <View>
            <Text style={styles.ButtonTitle}>Email</Text>
            <Text style={styles.ButtonDescription}>juanita123@gmail.com</Text>
          </View>
          <AntDesign name="right" size={20} style={styles.Arrow} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.AllButtons}>
        <View style={styles.Visualization}>
        <View style={styles.IconView}>
        <MaterialIcons name="lock" size={18} color="white" />
        </View>
          <View>
            <Text style={styles.ButtonTitle}>Senha</Text>
            <Text style={styles.ButtonDescription}>nunca foi alterada</Text>
          </View>
          <AntDesign name="right" size={20} style={styles.Arrow} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}