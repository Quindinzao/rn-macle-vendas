// External libraries
import { StyleSheet } from 'react-native';

// Styles
import { Theme } from '../../styles/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: 54,
      width: '100%',
      backgroundColor: 'transparent',
      marginBottom: theme.spacing.s12,
    },
    content: {
      backgroundColor: theme.colors.backgroundInput,
      color: theme.colors.text,
      borderRadius: theme.roundness,
    },
  });
