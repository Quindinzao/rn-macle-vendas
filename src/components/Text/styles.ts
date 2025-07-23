// Eternal libraries
import { StyleSheet } from 'react-native';

// Styles
import { Theme } from '../../styles/theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    titleLarge: {
      fontSize: theme.fontSize.fs24,
      fontFamily: theme.fontFamily.medium,
      color: theme.colors.white,
    },
    titleMedium: {
      fontSize: theme.fontSize.fs18,
      fontFamily: theme.fontFamily.semiBold,
      color: theme.colors.black,
    },
    titleSmall: {
      fontSize: theme.fontSize.fs18,
      fontFamily: theme.fontFamily.medium,
      color: theme.colors.black,
    },
    text: {
      fontSize: theme.fontSize.fs14,
      fontFamily: theme.fontFamily.regular,
      color: theme.colors.black,
    },
    caption: {
      fontSize: theme.fontSize.fs10,
      fontFamily: theme.fontFamily.regular,
      color: theme.colors.gray_700,
    },
  });
