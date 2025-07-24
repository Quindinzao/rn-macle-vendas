import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    text: {
      width: '100%',
      textAlign: 'left',
      marginBottom: theme.spacing.s04,
    },
    button: {
      width: '100%',
    },
  });
