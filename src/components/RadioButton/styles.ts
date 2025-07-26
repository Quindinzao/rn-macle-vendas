import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/theme';

export const createStyles = (theme: Theme, width: number) =>
  StyleSheet.create({
    icon: {
      marginRight: theme.spacing.s08,
    },
    text: {
      width: width - theme.spacing.s64,
    },
  });
