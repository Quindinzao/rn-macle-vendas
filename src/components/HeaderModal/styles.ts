// External libraries
import { StyleSheet } from 'react-native';

// Styles
import { Theme } from '../../styles/theme';

export const createStyles = (theme: Theme, isIOS: boolean) =>
  StyleSheet.create({
    container: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.spacing.s24,
    },
    close: {
      position: 'absolute',
      right: isIOS ? -theme.spacing.s04 : -theme.spacing.s16,
      top: isIOS ? -theme.spacing.s16 : -theme.spacing.s12,
    },
  });
