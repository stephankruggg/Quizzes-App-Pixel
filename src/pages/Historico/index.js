import React from 'react';
import { SafeAreaView, Image, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 

import styles from './style'

const DATA = [
  {
    id:'0',
    title:'Swift',
    image: require('./assets/CoolKidsAloneTime.png'),
    description:'Advanced iOS apps',
    result: 'Você acertou 8 de 10',
    resultStyle: styles.QuizResultSucess,
    date: 'Em 25/11/21'
  },
  {
    id:'1',
    title: 'Scrum',
    image: require('./assets/CoolKidsPerforming.png'),
    description: 'Advanced project organization course',
    result: 'Você acertou 4 de 10',
    resultColor: '#EF4949',
    resultStyle: styles.QuizResultFailure,
    date: 'Em 22/11/21'
  }
]

const Item = ({title, image, description, result, date, resultStyle}) => {
  return (
    <View>
      <TouchableOpacity style={styles.QuizView}>
        <Image
          style={styles.QuizImage}
          source={image}
        ></Image>
        <View style={styles.RowType}>
            <Text style={resultStyle}>{result}</Text>
            <Text style={styles.QuizDate}>{date}</Text>
        </View>
        <Text style={styles.QuizTitle}>{title}</Text>
        <Text style={styles.QuizDescription}>{description}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function Historico({navigation}) {
  
  const rItem = ({item}) => {
    return (
      <Item title={item.title} image={item.image} description={item.description} result={item.result} date={item.date} resultStyle={item.resultStyle}/>
    );
  }

  return (
    <SafeAreaView style={styles.BigView}>
      <StatusBar barStyle='dark-content'/>
      <View style={styles.RowType}>
        <TouchableOpacity onPress={() => navigation.navigate('Home', {screen: 'Perfil'})} style={styles.Back}>
          <AntDesign name="left" size={15} color="black" />
        </TouchableOpacity>
        <Text style={styles.Title}>Seu histórico</Text>
      </View>
      <View style={styles.FlatlistView}>
        <FlatList
        data={DATA}
        renderItem={rItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}