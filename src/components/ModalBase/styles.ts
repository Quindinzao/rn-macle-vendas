import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/theme';

export const createStyles = (theme: Theme, isIOS: boolean, width: number) =>
  StyleSheet.create({
    fullScreenModal: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    innerContent: {
      width: isIOS ? width - theme.spacing.s24 : '100%',
      height: isIOS ? '80%' : '65%',
      paddingHorizontal: theme.spacing.s12,
      paddingVertical: theme.spacing.s32,
      borderTopStartRadius: theme.roundness,
      borderTopEndRadius: theme.roundness,
      borderBottomStartRadius: isIOS ? theme.roundness : 0,
      borderBottomEndRadius: isIOS ? theme.roundness : 0,
      backgroundColor: theme.colors.background,
    },
  });
