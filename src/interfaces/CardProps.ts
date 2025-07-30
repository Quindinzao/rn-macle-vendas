export type CardFields = 'nickname' | 'cardNumber' | 'cvv' | 'expirationDate';

export interface CardFormProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
