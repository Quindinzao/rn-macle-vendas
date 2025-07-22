// globalStyles.js
import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const typography = StyleSheet.create({
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

export const layout = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: theme.spacing.s12,
    backgroundColor: theme.colors.background,
  },
  row: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
