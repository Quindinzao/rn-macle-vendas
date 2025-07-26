// External libraries
import { useState } from 'react';
import { View } from 'react-native';

// Components
import Button from '../Button';
import TextField from '../TextField';

// Styles
import { createStyles } from './styles';
import { layout } from '../../styles/globalStyle';
import Text from '../Text';
import { useAppTheme } from '../../hooks/useAppTheme';

const AddressForm: React.FC = () => {
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [number, setNumber] = useState('');
  const [cep, setCEP] = useState('');
  const theme = useAppTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <Text type={'titleSmall'} style={styles.text}>
        Adicione seu endereço
      </Text>
      <TextField
        label={'Cidade'}
        value={city}
        onChangeText={event => setCity(event)}
      />
      <TextField
        label={'Estado'}
        value={street}
        onChangeText={event => setStreet(event)}
      />
      <TextField
        label={'Bairro'}
        value={neighborhood}
        onChangeText={event => setNeighborhood(event)}
      />
      <View style={layout.row}>
        <TextField
          label={'Número'}
          value={number}
          keyboardType={'numeric'}
          onChangeText={event => setNumber(event)}
          style={styles.inputHalf}
        />
        <TextField
          label={'CEP'}
          value={cep}
          keyboardType={'numeric'}
          onChangeText={event => setCEP(event)}
          style={styles.inputHalf}
        />
      </View>
      <Button mode={'contained'} onPress={() => console.warn('Hello World')}>
        Entrar
      </Button>
    </View>
  );
};

export default AddressForm;
