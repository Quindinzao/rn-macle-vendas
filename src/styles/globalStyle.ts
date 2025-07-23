// External libraries
import { Dimensions, StyleSheet } from 'react-native';

// Styles
import { theme } from './theme';

const width = Dimensions.get('screen').width;

export const layout = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: theme.spacing.s12,
    backgroundColor: theme.colors.background,
  },
  row: {
    width: width - 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
