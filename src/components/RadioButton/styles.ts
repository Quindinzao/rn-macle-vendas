import { Dimensions, StyleSheet } from 'react-native';
import { Theme } from '../../styles/theme';

const width = Dimensions.get('screen').width;

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    icon: {
      marginRight: theme.spacing.s08,
    },
    text: {
      width: width - theme.spacing.s64,
    },
  });
