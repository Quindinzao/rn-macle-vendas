// External libraries
import { StyleSheet } from 'react-native';

// Styles
import { theme } from './theme';

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
