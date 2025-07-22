// External libraries
import { Button as RNPButton, useTheme } from 'react-native-paper';

// Styles
import { createStyles } from './styles';
import { Theme } from '../../styles/theme';

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  mode?: 'text' | 'contained';
  type?: 'text' | 'image';
  style?: object;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  mode = 'contained',
  type = 'text',
  style,
}) => {
  const theme: Theme = useTheme();
  const styles = createStyles(theme, type);
  return (
    <RNPButton
      mode={mode}
      onPress={onPress}
      style={[styles.container, style]}
      contentStyle={styles.content}
    >
      {children}
    </RNPButton>
  );
};

export default Button;
