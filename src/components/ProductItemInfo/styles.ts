import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/theme';

export const createStyles = (theme: Theme, width: number) =>
  StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginRight: theme.spacing.s08,
    },
    description: {
      width: width - 232,
      marginVertical: theme.spacing.s08,
    },
  });
