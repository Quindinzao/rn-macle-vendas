// Interfaces
import { AddressFieldsProps } from '../../interfaces/AddressProps';

export const initialErrors: Record<AddressFieldsProps, string> = {
  city: '',
  uf: '',
  neighborhood: '',
  number: '',
  cep: '',
  street: '',
};

export const validateAddressFields = (
  fields: Record<AddressFieldsProps, string>,
): typeof initialErrors => ({
  city: fields.city.trim() ? '' : 'Cidade é obrigatória.',
  uf: fields.uf.trim() ? '' : 'Estado é obrigatório.',
  neighborhood: fields.neighborhood.trim() ? '' : 'Bairro é obrigatório.',
  number: fields.number.trim() ? '' : 'Número é obrigatório.',
  cep: fields.cep.trim() ? '' : 'CEP é obrigatório.',
  street: fields.street.trim() ? '' : 'Rua é obrigatória.',
});
