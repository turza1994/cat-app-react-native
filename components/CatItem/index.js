import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
// import StyledButton from "../StyledButton";
import styles from './styles';

const CarItem = (props) => {

  const { name, origin, temperament, image } = props.car;
  if(!image) return null;
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image.url}
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

      {/* <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />
      </View> */}

    </View>
  );
};

export default CarItem;
