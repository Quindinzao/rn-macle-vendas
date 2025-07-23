// External libraries
import { Dimensions, StyleSheet } from 'react-native';

// Styles
import { Theme } from '../../styles/theme';

const width = Dimensions.get('screen').width;

export const createStyles = (theme: Theme, typeHeader: 'long' | 'short') =>
  StyleSheet.create({
    container: {
      width: width,
      height: typeHeader === 'long' ? width : 240,
      position: 'relative',
      alignItems: 'center',
      marginBottom: theme.spacing.s24,
    },
    image: {
      width: width,
    },
    back: {
      position: 'absolute',
      top: theme.spacing.s48,
      left: theme.spacing.s04,
    },
    logo: {
      position: 'absolute',
      top: theme.spacing.s64,
    },
    text: {
      position: 'absolute',
      bottom: theme.spacing.s64,
      color: theme.colors.onPrimary,
    },
  });
