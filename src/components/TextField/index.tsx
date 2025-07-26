// External libraries
import { HelperText, TextInput } from 'react-native-paper';

// Hooks
import { useAppTheme } from '../../hooks/useAppTheme';

// Interfaces
import { TextFieldProps } from '../../interfaces/TextFieldProps';

// Styles
import { createStyles } from './styles';

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  style,
  error = false,
  errorMessage,
}) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <>
      {errorMessage && (
        <HelperText type="error" visible={error}>
          {errorMessage}
        </HelperText>
      )}
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
        error={error}
      />
    </>
  );
};

export default TextField;
