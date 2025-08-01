// External libraries
import { StyleSheet } from 'react-native';

// Styles
import { Theme } from '../../styles/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      marginTop: theme.spacing.s24,
    },
    form: {
      marginTop: theme.spacing.s24,
    },
  });
