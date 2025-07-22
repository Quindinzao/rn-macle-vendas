import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/theme';

export const createStyles = (theme: Theme, type: string) =>
  StyleSheet.create({
    container: {
      height: 54,
      justifyContent: 'center',
      width: type === 'text' ? '100%' : 54,
      borderRadius: theme.roundness,
      marginBottom: theme.spacing.s12,
    },
    content: {
      height: 54,
    },
  });
