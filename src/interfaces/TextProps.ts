import { StyleProp, TextStyle } from 'react-native';

export interface TextProps {
  children: React.ReactNode;
  type?: 'titleLarge' | 'titleMedium' | 'titleSmall' | 'text' | 'caption';
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
}
