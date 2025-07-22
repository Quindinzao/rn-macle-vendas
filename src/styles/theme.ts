import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { Platform } from 'react-native';
import { colors } from './colors';

const ios = Platform.OS === 'ios';

export const theme = {
  colors: {
    ...DefaultTheme.colors,
    primary: colors.blue_400,
    secondary: colors.blue_200,
    background: colors.white,
    surface: colors.white,
    text: colors.black,
    error: colors.red_500,
    onSurface: colors.gray_700,
    onBackground: colors.gray_700,
    backgroundInput: colors.gray_200,
  },
  roundness: 4,
  spacing: {
    s04: 4,
    s08: 8,
    s12: 12,
    s16: 16,
    s24: 24,
    s32: 32,
    s48: 48,
    s64: 64,
  },
  fontSize: {
    fs10: 10,
    fs14: 14,
    fs18: 18,
    fs24: 24,
  },
  fontFamily: {
    regular: ios ? 'Inter 28pt Regular' : 'Inter_28pt-Regular',
    medium: ios ? 'Inter 28pt Medium' : 'Inter_28pt-Medium',
    semiBold: ios ? 'Inter 28pt SemiBold' : 'Inter_28pt-SemiBold',
  },
};

export type Theme = typeof theme;
