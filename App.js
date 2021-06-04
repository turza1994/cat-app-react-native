import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CatsList from './components/CatsList';
// import Header from './components/Header';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CatDetails from './components/CatDetails';

function App(props) {
  return (
    <View style={styles.container}>
      <CatsList navigation={props.navigation} />
      <StatusBar style="auto" />
    </View>
  );
}

const appNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
  CatDetails: {
    screen: CatDetails,
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(appNavigator)