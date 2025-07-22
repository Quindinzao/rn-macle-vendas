// External libraries
import { Text as RNPText, useTheme } from 'react-native-paper';

// Styles
import { createStyles } from './styles';
import { Theme } from '../../styles/theme';

interface TextProps {
  children: React.ReactNode;
  type?: 'titleLarge' | 'titleMedium' | 'titleSmall' | 'text' | 'caption';
  color?: string;
  style?: object;
}

const Text: React.FC<TextProps> = ({
  children,
  type = 'text',
  color,
  style,
}) => {
  const theme = useTheme<Theme>();
  const styles = createStyles(theme);

  console.log('AAAAAAAAA');

  return <RNPText style={[styles[type], { color }, style]}>{children}</RNPText>;
};

export default Text;
