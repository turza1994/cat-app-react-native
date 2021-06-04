import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import CatItem from "../CatItem";

import styles from './styles';
import cars from './cars';

const CatsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CatItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CatsList;
