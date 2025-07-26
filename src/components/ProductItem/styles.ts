import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/theme';

export const createStyle = (theme: Theme, width: number) =>
  StyleSheet.create({
    container: {
      width: width - 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    row: {
      flexDirection: 'row',
    },
    line: {
      height: 1,
      width: '100%',
      marginVertical: theme.spacing.s08,
      backgroundColor: theme.colors.gray_200,
    },
  });
