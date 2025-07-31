export type AddressFieldsProps =
  | 'city'
  | 'uf'
  | 'street'
  | 'neighborhood'
  | 'number'
  | 'cep';

export interface AddressFormProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AddressItem {
  title: string;
}
