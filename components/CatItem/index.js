import React from 'react';
import {View, Text, ImageBackground, Button} from 'react-native';
// import { useNavigation } from 'react-navigation';
// import StyledButton from "../StyledButton";
import styles from './styles';

const CarItem = (props) => {

  const { name, origin, temperament, image } = props.car;
  const { navigation } = props;
  // if(!image) return null;
  // const navigation = useNavigation()

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={{uri: image?.url}}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          Origin: {origin}
          {'\n'}
          <Text style={styles.subtitleCTA}>
          Temperament: {temperament}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button 
          title= "More Details"
          onPress={() => {
            navigation.push('CatDetails', props.car )
          }}
        />
      </View>
      
    </View>
  );
};

export default CarItem;
