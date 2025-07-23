import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginRight: theme.spacing.s08,
    },
    description: {
      maxWidth: 160,
      marginVertical: theme.spacing.s08,
    },
  });
