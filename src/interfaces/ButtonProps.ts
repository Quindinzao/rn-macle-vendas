export interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  mode?: 'text' | 'contained';
  type?: 'text' | 'image';
  style?: object;
}
