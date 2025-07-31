export interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  mode?: 'text' | 'contained';
  type?: 'text' | 'image';
  style?: object;
}

export interface ButtonNextProps {
  onPress: () => void;
  title: string;
  amount: string;
}
