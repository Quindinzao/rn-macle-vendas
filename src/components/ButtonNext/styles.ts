import { Dimensions, StyleSheet } from 'react-native';
import { Theme } from '../../styles/theme';

const { width } = Dimensions.get('screen');

export const createStyles = (theme: Theme) =>
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
