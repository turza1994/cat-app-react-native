import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, 0.5)'
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitleCTA: {
    // textDecorationLine: 'underline',
  },
  subtitle: {
    fontSize: 16,
    // color: '#5c5e62',
    textAlign: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 120,
    width: '100%',
  }

});

export default styles;
