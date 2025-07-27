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

const AddressForm: React.FC = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [number, setNumber] = useState('');
  const [cep, setCEP] = useState('');

  const [errors, setErrors] = useState({
    city: '',
    state: '',
    neighborhood: '',
    number: '',
    cep: '',
  });

  const theme = useAppTheme();
  const styles = createStyles(theme);

  const validate = () => {
    const newErrors = {
      city: city.trim() === '' ? 'Cidade é obrigatória.' : '',
      state: state.trim() === '' ? 'Estado é obrigatório.' : '',
      neighborhood: neighborhood.trim() === '' ? 'Bairro é obrigatório.' : '',
      number: number.trim() === '' ? 'Número é obrigatório.' : '',
      cep: cep.trim() === '' ? 'CEP é obrigatório.' : '',
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
        label={'Cidade'}
        value={city}
        onChangeText={setCity}
        error={!!errors.city}
        errorMessage={errors.city}
      />
      <TextField
        label={'Estado'}
        value={state}
        onChangeText={setState}
        error={!!errors.state}
        errorMessage={errors.state}
      />
      <TextField
        label={'Bairro'}
        value={neighborhood}
        onChangeText={setNeighborhood}
        error={!!errors.neighborhood}
        errorMessage={errors.neighborhood}
      />

      <View style={layout.row}>
        <View style={styles.inputHalf}>
          <TextField
            label={'Número'}
            value={number}
            onChangeText={setNumber}
            keyboardType={'numeric'}
            error={!!errors.number}
            errorMessage={errors.number}
          />
        </View>
        <View style={styles.inputHalf}>
          <TextField
            label={'CEP'}
            value={cep}
            onChangeText={setCEP}
            keyboardType={'numeric'}
            error={!!errors.cep}
            errorMessage={errors.cep}
          />
        </View>
      </View>

      <Button mode={'contained'} onPress={handleSubmit}>
        Adicionar
      </Button>
    </ScrollView>
  );
};

export default AddressForm;
