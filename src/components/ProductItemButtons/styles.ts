import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    buttonSize: {
      alignItems: 'center',
      justifyContent: 'center',
      width: theme.spacing.s24,
      height: theme.spacing.s24,
      borderRadius: theme.roundness,
    },
    colorButton: {
      backgroundColor: theme.colors.blue_200,
    },
    text: {
      color: theme.colors.blue_200,
      marginHorizontal: theme.spacing.s04,
      textAlign: 'center',
    },
  });
