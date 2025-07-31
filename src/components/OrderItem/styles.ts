import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/theme';
import { screenWidth } from '../../utils/helpers/dimensions';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: screenWidth - 24,
      height: 106,
      borderRadius: theme.roundness,
      padding: theme.spacing.s08,
    },
    content: {
      height: '100%',
      justifyContent: 'center',
      borderRadius: theme.roundness,
    },
    mediumSpace: {
      marginBottom: theme.spacing.s04,
    },
    smallSpace: {
      marginBottom: theme.spacing.s02,
    },
    line: {
      height: 1,
      width: '100%',
      position: 'absolute',
      bottom: 0,
      backgroundColor: theme.colors.gray_200,
    },
    next: {
      position: 'absolute',
      right: theme.spacing.s16,
      top: '50%',
      transform: [{ translateY: -theme.spacing.s12 }],
    },
  });
