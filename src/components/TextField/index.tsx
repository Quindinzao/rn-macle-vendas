import React from 'react';
import { TextInput, useTheme } from 'react-native-paper';
import { createStyles } from './styles';
import { Theme } from '../../styles/theme';

interface TextFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric';
  style?: object;
}

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
