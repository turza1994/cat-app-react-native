import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import CatItem from "../CatItem";

import styles from './styles';
// import cars from './cars';

const CatsList = (props) => {

  const [cars, setCars] = useState([])

  useEffect(()=>{
            fetch('https://api.thecatapi.com/v1/breeds')
            .then(response => response.json())
            .then((json) => setCars(json));
  },[]);

  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CatItem car={item} navigation={props.navigation} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CatsList;
