import { CardFields } from '../../interfaces/CardProps';

export const initialErrors: Record<CardFields, string> = {
  nickname: '',
  cardNumber: '',
  cvv: '',
  expirationDate: '',
};

export const validateCardFields = (
  fields: Record<CardFields, string>,
): typeof initialErrors => ({
  nickname: '',
  cardNumber: fields.cardNumber.trim() ? '' : 'Número do cartão é obrigatório.',
  cvv: fields.cvv.trim() ? '' : 'CVV é obrigatório.',
  expirationDate: fields.expirationDate.trim()
    ? ''
    : 'Data de expiração é obrigatória.',
});
