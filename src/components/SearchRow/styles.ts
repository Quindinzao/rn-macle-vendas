import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  textField: {
    width: width - 84,
  },
});
