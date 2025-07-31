export type CardFieldsProps =
  | 'nickname'
  | 'cardNumber'
  | 'cvv'
  | 'expirationDate';

export interface CardFormProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SavedCardProps {
  title: string;
  image: any;
}
