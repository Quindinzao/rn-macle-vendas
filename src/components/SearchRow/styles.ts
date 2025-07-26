import { StyleSheet } from 'react-native';

export const createStyles = (width: number) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 12,
    },
    textField: {
      width: width - 90,
    },
  });
