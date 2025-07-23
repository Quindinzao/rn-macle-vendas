import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      borderRadius: theme.roundness,
    },
    textContent: {
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      flexDirection: 'row',
      marginBottom: theme.spacing.s08,
    },
    text: {
      marginBottom: theme.spacing.s01,
    },
  });
