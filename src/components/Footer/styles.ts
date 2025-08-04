// External libraries
import { StyleSheet } from 'react-native';

// Styles
import { Theme } from '../../styles/theme';

export const createStyles = (theme: Theme, width: number) =>
  StyleSheet.create({
    container: {
      width: width - 24,
      borderRadius: theme.roundness,
      backgroundColor: theme.colors.background,
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
