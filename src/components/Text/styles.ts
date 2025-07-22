import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    titleLarge: {
      fontSize: theme.fontSize.fs24,
      fontFamily: theme.fontFamily.medium,
    },
    titleMedium: {
      fontSize: theme.fontSize.fs18,
      fontFamily: theme.fontFamily.semiBold,
    },
    titleSmall: {
      fontSize: theme.fontSize.fs18,
      fontFamily: theme.fontFamily.medium,
    },
    text: {
      fontSize: theme.fontSize.fs14,
      fontFamily: theme.fontFamily.regular,
    },
    caption: {
      fontSize: theme.fontSize.fs10,
      fontFamily: theme.fontFamily.regular,
    },
  });
