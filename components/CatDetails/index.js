import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function CatDetails({navigation}) {

    const img = navigation.getParam('image')?.url;

    return (
        <View style={styles.cardView}>
            <Text style={styles.title}>Cat Details Page {'\n\n'}</Text>
            <Image
                style={styles.stretch}
                source={{ uri: img }}
            />
            <Text style={styles.nameTitle}>Cat Name: {navigation.getParam('name')}</Text>
            <Text style={styles.subTitle}>Origin: {navigation.getParam('origin')}</Text>
            <Text style={styles.subTitle}>Temperament: {navigation.getParam('temperament')}</Text>
            <Text style={styles.subTitle}>{navigation.getParam('description')}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    stretch: {
      width: 400,
      height: 400,
      resizeMode: 'stretch',
    },

    cardView: {
        borderWidth: 1,
        borderColor: "thistle",
        borderRadius: 50,
        padding: '5%',
        paddingTop: '2%',
        alignItems: 'center',
        margin: '5%', 
      },
    title: {
        fontSize: 40,
        fontWeight: '500',
      },

      nameTitle: {
        fontSize: 20,
        fontWeight: '500',
        margin: '2%',
      },
      subTitle: {
        fontSize: 14,
        fontWeight: '400',
        margin: '1%',

      },
  });