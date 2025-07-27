// External libraries
import React, { useCallback, useState } from 'react';
import { ScrollView, View } from 'react-native';

// Components
import Button from '../Button';
import TextField from '../TextField';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Utils
import {
  initialErrors,
  validateCardFields,
} from '../../utils/validators/cardValidator';

// Interfaces
import { CardFields } from '../../interfaces/CardProps';

// Styles
import { createStyles } from './styles';
import { layout } from '../../styles/globalStyle';

const CardForm: React.FC = () => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const [form, setForm] = useState<Record<CardFields, string>>({
    nickname: '',
    cardNumber: '',
    cvv: '',
    expirationDate: '',
  });

  const [errors, setErrors] = useState(initialErrors);

  const handleChange = useCallback(
    (field: CardFields, value: string) => {
      setForm(prev => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    },
    [errors],
  );

  const handleSubmit = useCallback(() => {
    const newErrors = validateCardFields(form);
    setErrors(newErrors);

    const isValid = Object.values(newErrors).every(error => !error);

    if (isValid) {
      console.log('Dados enviados:', form);
      // FAZER ENVIO PARA SQLITE OU API
    }
  }, [form]);

  const renderInput = (
    label: string,
    field: CardFields,
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
      {renderInput('Apelido', 'nickname')}
      {renderInput('Número do cartão', 'cardNumber', 'numeric')}

      <View style={layout.row}>
        <View style={styles.inputHalf}>
          {renderInput('CVV', 'cvv', 'numeric')}
        </View>
        <View style={styles.inputHalf}>
          {renderInput('Data de expiração', 'expirationDate', 'numeric')}
        </View>
      </View>

      <Button mode="contained" onPress={handleSubmit}>
        Adicionar
      </Button>
    </ScrollView>
  );
};

export default CardForm;
