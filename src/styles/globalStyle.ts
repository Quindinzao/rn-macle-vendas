// External libraries
import { StyleSheet } from 'react-native';

// Styles
import { theme } from './theme';

export const layout = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  headerContainer: {
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: theme.spacing.s12,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: theme.spacing.s04,
    backgroundColor: theme.colors.background,
  },
  flatListContainer: {
    flex: 1,
  },
  flatListContent: {
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  row: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blue_900,
  },
});
