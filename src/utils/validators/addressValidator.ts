import { AddressFields } from '../../interfaces/AddressProps';

export const initialErrors: Record<AddressFields, string> = {
  city: '',
  uf: '',
  neighborhood: '',
  number: '',
  cep: '',
};

export const validateAddressFields = (
  fields: Record<AddressFields, string>,
): typeof initialErrors => ({
  city: fields.city.trim() ? '' : 'Cidade é obrigatória.',
  uf: fields.uf.trim() ? '' : 'Estado é obrigatório.',
  neighborhood: fields.neighborhood.trim() ? '' : 'Bairro é obrigatório.',
  number: fields.number.trim() ? '' : 'Número é obrigatório.',
  cep: fields.cep.trim() ? '' : 'CEP é obrigatório.',
});
