// Interfaces
import { CardFieldsProps } from '../../interfaces/CardProps';

export const initialErrors: Record<CardFieldsProps, string> = {
  nickname: '',
  cardNumber: '',
  cvv: '',
  expirationDate: '',
};

export const validateCardFields = (
  fields: Record<CardFieldsProps, string>,
): typeof initialErrors => ({
  nickname: '',
  cardNumber: fields.cardNumber.trim() ? '' : 'Número do cartão é obrigatório.',
  cvv: fields.cvv.trim() ? '' : 'CVV é obrigatório.',
  expirationDate: fields.expirationDate.trim()
    ? ''
    : 'Data de expiração é obrigatória.',
});
