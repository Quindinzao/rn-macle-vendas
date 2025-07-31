// External libraries
import React, { useCallback, useState } from 'react';
import { ScrollView, View } from 'react-native';

// Components
import Button from '../Button';
import TextField from '../TextField';

// Database
import { insertCard } from '../../database/card';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Utils
import {
  initialErrors,
  validateCardFields,
} from '../../utils/validators/cardValidator';
import { formatCardNumber } from '../../utils/validators/cardNumberMask';
import { formatExpirationDate } from '../../utils/validators/expirationDateMask';
import { formatCvv } from '../../utils/validators/cvvMask';
import { cardFormValidator } from '../../utils/validators/cardFormValidator';

// Interfaces
import { CardFields, CardFormProps } from '../../interfaces/CardProps';

// Styles
import { createStyles } from './styles';
import { layout } from '../../styles/globalStyle';

const CardForm: React.FC<CardFormProps> = ({ setVisible }) => {
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
      let formatted = value;

      switch (field) {
        case 'cardNumber':
          formatted = formatCardNumber(value);
          break;
        case 'expirationDate':
          formatted = formatExpirationDate(value);
          break;
        case 'cvv':
          formatted = formatCvv(value);
          break;
      }

      setForm(prev => ({ ...prev, [field]: formatted }));
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    },
    [errors],
  );

  const handleSubmit = () => {
    const newErrors = validateCardFields(form);
    setErrors(newErrors);

    const isValid =
      Object.values(newErrors).every(error => !error) &&
      cardFormValidator(form);

    if (isValid) {
      insertCard({
        nickname: form.nickname,
        cardNumber: form.cardNumber,
        cvv: form.cvv,
        expirationDate: form.expirationDate,
      });
      setForm({
        nickname: '',
        cardNumber: '',
        cvv: '',
        expirationDate: '',
      });
      setVisible(false);
    }
  };

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
