import { Dimensions, StyleSheet } from 'react-native';
import { Theme } from '../../styles/theme';

const width = Dimensions.get('screen').width;

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginRight: theme.spacing.s08,
    },
    description: {
      width: width - 232,
      marginVertical: theme.spacing.s08,
    },
  });
