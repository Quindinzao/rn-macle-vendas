// External libraries
import React, { useState, useCallback } from 'react';
import { ScrollView, View } from 'react-native';

// Components
import Button from '../Button';
import TextField from '../TextField';

// Contexts
import { useSnackbar } from '../../contexts/SnackbarContext';

// Database
import { insertAddress } from '../../database/address';

// Services
import { addressValidator } from '../../services/addressValidator';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Utils
import {
  initialErrors,
  validateAddressFields,
} from '../../utils/validators/addressValidator';

// Interfaces
import {
  AddressFieldsProps,
  AddressFormProps,
} from '../../interfaces/AddressProps';

// Styles
import { createStyles } from './styles';
import { layout } from '../../styles/globalStyle';

const AddressForm: React.FC<AddressFormProps> = ({ setVisible }) => {
  const { showSnackbar } = useSnackbar();
  const [form, setForm] = useState<Record<AddressFieldsProps, string>>({
    city: '',
    uf: '',
    neighborhood: '',
    street: '',
    number: '',
    cep: '',
  });
  const [errors, setErrors] = useState(initialErrors);

  const theme = useAppTheme();
  const styles = createStyles(theme);

  const handleChange = useCallback(
    (field: AddressFieldsProps, value: string) => {
      setForm(prev => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    },
    [errors],
  );

  const handleSubmit = async () => {
    const newErrors = validateAddressFields(form);
    setErrors(newErrors);

    const isValid = Object.values(newErrors).every(error => !error);

    if (isValid) {
      const addressParts = [
        form.street,
        form.number,
        form.neighborhood,
        form.city,
        form.uf,
        form.cep,
      ];

      const addressString = addressParts.join(', ');
      const result = await addressValidator(addressString);
      if (result.isValid) {
        await insertAddress({
          cep: form.cep,
          streetName: form.street,
          neighborhood: form.neighborhood,
          number: form.number,
          city: form.city,
          state: form.uf,
        });
        setForm({
          city: '',
          uf: '',
          neighborhood: '',
          street: '',
          number: '',
          cep: '',
        });
        setVisible(false);
      } else {
        showSnackbar('Endereço inválido, por favor, insira um endereço válido');
      }
    }
  };

  const renderInput = (
    label: string,
    field: AddressFieldsProps,
    keyboardType: 'default' | 'numeric' = 'default',
  ) => (
    <TextField
      label={label}
      value={form[field]}
      onChangeText={text => handleChange(field, text)}
      error={!!errors[field]}
      errorMessage={errors[field]}
      keyboardType={keyboardType}
    />
  );

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {renderInput('Cidade', 'city')}
      {renderInput('Estado', 'uf')}
      {renderInput('Bairro', 'neighborhood')}
      {renderInput('Rua', 'street')}

      <View style={layout.row}>
        <View style={styles.inputHalf}>
          {renderInput('Número', 'number', 'numeric')}
        </View>
        <View style={styles.inputHalf}>
          {renderInput('CEP', 'cep', 'numeric')}
        </View>
      </View>

      <Button mode="contained" onPress={handleSubmit}>
        Adicionar
      </Button>
    </ScrollView>
  );
};

export default AddressForm;
