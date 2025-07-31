import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/theme';

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    title: {
      marginBottom: theme.spacing.s16,
    },
    text: {
      marginVertical: theme.spacing.s04,
      width: '48%',
    },
    right: {
      textAlign: 'right',
    },
    price: {
      marginTop: theme.spacing.s24,
    },
  });
