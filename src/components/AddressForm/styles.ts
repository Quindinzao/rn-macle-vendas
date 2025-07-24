// External libraries
import { StyleSheet } from 'react-native';

// Styles
import { Theme } from '../../styles/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    inputHalf: {
      width: '48%',
    },
    text: {
      marginBottom: theme.spacing.s12,
    },
  });
