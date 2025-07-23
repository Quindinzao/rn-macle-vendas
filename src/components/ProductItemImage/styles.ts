import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: 116,
      height: 116,
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing.s08,
      marginRight: theme.spacing.s16,
      backgroundColor: theme.colors.blue_100,
      borderRadius: theme.roundness,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
  });
