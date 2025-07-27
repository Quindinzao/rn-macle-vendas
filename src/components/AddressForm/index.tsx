// External libraries
import React, { useState, useCallback } from 'react';
import { ScrollView, View } from 'react-native';

// Components
import Button from '../Button';
import TextField from '../TextField';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Utils
import {
  initialErrors,
  validateAddressFields,
} from '../../utils/validators/addressValidator';

// Interfaces
import { AddressFields } from '../../interfaces/AddressProps';

// Styles
import { createStyles } from './styles';
import { layout } from '../../styles/globalStyle';

const AddressForm: React.FC = () => {
  const [form, setForm] = useState<Record<AddressFields, string>>({
    city: '',
    uf: '',
    neighborhood: '',
    number: '',
    cep: '',
  });

  const [errors, setErrors] = useState(initialErrors);

  const theme = useAppTheme();
  const styles = createStyles(theme);

  const handleChange = useCallback(
    (field: AddressFields, value: string) => {
      setForm(prev => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    },
    [errors],
  );

  const handleSubmit = useCallback(() => {
    const newErrors = validateAddressFields(form);
    setErrors(newErrors);

    const isValid = Object.values(newErrors).every(error => !error);

    if (isValid) {
      console.log('Dados enviados:', form);
      // ENVIAR DADOS PARA O SQLITE
    }
  }, [form]);

  const renderInput = (
    label: string,
    field: AddressFields,
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
