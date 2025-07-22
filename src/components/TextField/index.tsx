// External libraries
import { TextInput, useTheme } from 'react-native-paper';

// Interfaces
import { TextFieldProps } from '../../interfaces/TextFieldProps';

// Styles
import { createStyles } from './styles';
import { Theme } from '../../styles/theme';

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  style,
}) => {
  const theme: Theme = useTheme();
  const styles = createStyles(theme);
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[styles.container, style]}
      contentStyle={styles.content}
      underlineColor="transparent"
      mode="flat"
    />
  );
};

export default TextField;
