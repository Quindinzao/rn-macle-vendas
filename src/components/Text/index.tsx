// External libraries
import { Text as RNPText } from 'react-native-paper';

// Interfaces
import { TextProps } from '../../interfaces/TextProps';

// Styles
import { createStyles } from './styles';
import { useAppTheme } from '../../hooks/useAppTheme';

const Text: React.FC<TextProps> = ({
  children,
  type = 'text',
  numberOfLines = 1,
  style,
}) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <RNPText style={[styles[type], style]} numberOfLines={numberOfLines}>
      {children}
    </RNPText>
  );
};

export default Text;
