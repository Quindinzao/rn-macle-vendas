// External libraries
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

// Components
import Button from '../Button';
import TextField from '../TextField';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Styles
import { createStyles } from './styles';
import { layout } from '../../styles/globalStyle';

const CardForm: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const [errors, setErrors] = useState({
    nickname: '',
    cardNumber: '',
    cvv: '',
    expirationDate: '',
  });

  const theme = useAppTheme();
  const styles = createStyles(theme);

  const validate = () => {
    const newErrors = {
      nickname: nickname.trim() === '' ? 'Apelido é obrigatório.' : '',
      cardNumber: cardNumber.trim() === '' ? 'Estado é obrigatório.' : '',
      cvv: cvv.trim() === '' ? 'Número é obrigatório.' : '',
      expirationDate:
        expirationDate.trim() === '' ? 'expirationDate é obrigatório.' : '',
    };

    setErrors(newErrors);

    return Object.values(newErrors).every(msg => msg === '');
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('Dados enviados');
    }
  };

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps={'handled'}
      showsVerticalScrollIndicator={false}
    >
      <TextField
        label={'Apelido'}
        value={nickname}
        onChangeText={setNickname}
        error={!!errors.nickname}
        errorMessage={errors.nickname}
      />
      <TextField
        label={'Número do cartão'}
        value={cardNumber}
        onChangeText={setCardNumber}
        error={!!errors.cardNumber}
        errorMessage={errors.cardNumber}
      />

      <View style={layout.row}>
        <View style={styles.inputHalf}>
          <TextField
            label={'CVV'}
            value={cvv}
            onChangeText={setCVV}
            keyboardType={'numeric'}
            error={!!errors.cvv}
            errorMessage={errors.cvv}
          />
        </View>
        <View style={styles.inputHalf}>
          <TextField
            label={'Data de expiração'}
            value={expirationDate}
            onChangeText={setExpirationDate}
            keyboardType={'numeric'}
            error={!!errors.expirationDate}
            errorMessage={errors.expirationDate}
          />
        </View>
      </View>

      <Button mode={'contained'} onPress={handleSubmit}>
        Adicionar
      </Button>
    </ScrollView>
  );
};

export default CardForm;
