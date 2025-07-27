import { useTheme } from 'react-native-paper';
import { Theme } from '../../styles/theme';

export const useAppTheme = (): Theme => {
  return useTheme<Theme>();
};
