// External libraries
import { Text as RNPText, useTheme } from 'react-native-paper';

// Interfaces
import { TextProps } from '../../interfaces/TextProps';

// Styles
import { createStyles } from './styles';
import { Theme } from '../../styles/theme';

const Text: React.FC<TextProps> = ({
  children,
  type = 'text',
  numberOfLines = 1,
  style,
}) => {
  const theme = useTheme<Theme>();
  const styles = createStyles(theme);

  return (
    <RNPText style={[styles[type], style]} numberOfLines={numberOfLines}>
      {children}
    </RNPText>
  );
};

export default Text;
