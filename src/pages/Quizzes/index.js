import React from 'react';
import { SafeAreaView, Image, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import styles from './style'

const DATA = [
  {
    id:'0',
    title:'UI',
    image: require('./assets/CourseImage.png'),
    description:'Questões sobre interface',
    press: 'HTMLQuiz'
  },
  {
    id:'1',
    title: 'HTML e CSS',
    image: require('./assets/HTMLCSS.png'),
    description: 'Usando estilos inline no HTML',
    press: 'HTMLQuiz'
  }
]

const Item = ({title, onPress, image, description}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.QuizView}>
        <Image
          style={styles.QuizImage}
          source={image}
        ></Image>
        <Text style={styles.QuizTitle}>{title}</Text>
        <Text style={styles.QuizDescription}>{description}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function Quizzes({navigation}) {
  
  const rItem = ({item}) => {
    return (
      <Item title={item.title} image={item.image} description={item.description} onPress={() => navigation.navigate(item.press)}/>
    );
  }

  return (
    <SafeAreaView style={styles.BigView}>
      <StatusBar barStyle='dark-content'/>
      <Text style={styles.Hello}>Hello,</Text>
      <Text style={styles.Nome}>Juana Antonieta</Text>
      <View style={styles.SearchView}>
        <TextInput style={styles.Search} placeholder='Pesquisar quiz'>
        </TextInput>
        <Image
          style={styles.Lupa}
          source={require('./assets/Lupa.png')}
        />
      </View>
      <View style={styles.BigBlueButtonView}>
          <TouchableOpacity style={styles.BigBlueButtonHTML}>
            <Text style={styles.TextBigBlueButton}>#HTML</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BigBlueButtonUX}>
            <Text style={styles.TextBigBlueButton}>#UX</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BigBlueButtonSwift}>
            <Text style={styles.TextBigBlueButton}>#Swift</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BigBlueButtonUI}>
          <Text style={styles.TextBigBlueButton}>#UI</Text>
        </TouchableOpacity>
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