import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function CatDetails({navigation}) {

    const img = navigation.getParam('image')?.url;

    return (
        <View>
            <Text>Cat Details Page {'\n\n'}</Text>
            <Text>{navigation.getParam('description')}</Text>
            <Image
                style={styles.stretch}
                source={{ uri: img }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    stretch: {
      width: 350,
      height: 200,
      resizeMode: 'stretch',
    },
  });