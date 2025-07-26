// External libraries
import { StyleSheet } from 'react-native';

// Styles
import { Theme } from '../../styles/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.spacing.s24,
    },
    close: {
      position: 'absolute',
      right: 0,
      top: -theme.spacing.s16,
    },
  });
