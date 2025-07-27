// External libraries
import { Button as RNPButton } from 'react-native-paper';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Interfaces
import { ButtonProps } from '../../interfaces/ButtonProps';

// Styles
import { createStyles } from './styles';

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  mode = 'contained',
  type = 'text',
  style,
}) => {
  const theme = useAppTheme();
  const styles = createStyles(theme, type);
  return (
    <RNPButton
      mode={mode}
      onPress={onPress}
      style={[styles.container, style, type === 'image' && styles.centerImage]}
      contentStyle={styles.content}
    >
      {children}
    </RNPButton>
  );
};

export default Button;
