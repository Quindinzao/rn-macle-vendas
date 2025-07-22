import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingHorizontal: theme.spacing.s12,
      backgroundColor: theme.colors.background,
    },
    form: {
      marginTop: theme.spacing.s24,
    },
  });
