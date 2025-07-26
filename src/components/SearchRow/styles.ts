import { StyleSheet } from 'react-native';

export const createStyles = (width: number) =>
  StyleSheet.create({
    textField: {
      width: width - 96,
    },
  });
