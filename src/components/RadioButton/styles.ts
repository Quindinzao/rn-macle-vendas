import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  text: {
    width: width - 64,
  },
});
