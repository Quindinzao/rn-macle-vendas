// External libraries
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

// Components
import Button from '../Button';
import TextField from '../TextField';
import RadioForm from '../RadioForm';

// Hooks
import { useAppTheme } from '../../hooks/useAppTheme';

// Constants
import { filterOptions } from '../../constants/filterOptions';

// Styles
import { createStyles } from './styles';
import { layout } from '../../styles/globalStyle';

const FilterForm: React.FC = () => {
  const [minimal, setMinimal] = useState('');
  const [maximum, setMaximum] = useState('');

  const [errors, setErrors] = useState({
    minimal: '',
    maximum: '',
  });

  const theme = useAppTheme();
  const styles = createStyles(theme);

  const validate = () => {
    const minFormatted = parseFloat(minimal || '0');
    const maxFormatted = parseFloat(maximum || '0');
    const newErrors = {
      minimal:
        minFormatted > maxFormatted
          ? 'Valor mínimo deve ser menor que o valor máximo'
          : '',
      maximum:
        minFormatted < maxFormatted
          ? 'Valor máximo deve ser maior que o valor mínimo'
          : '',
    };

    setErrors(newErrors);

    return Object.values(newErrors).every(msg => msg === '');
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('Formatação enviada');
    }
  };

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps={'handled'}
      showsVerticalScrollIndicator={false}
    >
      <View style={layout.row}>
        <View style={styles.inputHalf}>
          <TextField
            label={'Valor mínimo'}
            value={minimal}
            onChangeText={setMinimal}
            keyboardType={'numeric'}
            error={!!errors.minimal}
            errorMessage={errors.minimal}
          />
        </View>
        <View style={styles.inputHalf}>
          <TextField
            label={'Valor máximo'}
            value={maximum}
            onChangeText={setMaximum}
            keyboardType={'numeric'}
            error={!!errors.maximum}
            errorMessage={errors.maximum}
          />
        </View>
      </View>

      <RadioForm
        title={'Deseja que produto vá até você?'}
        items={filterOptions}
      />

      <Button
        mode={'contained'}
        onPress={handleSubmit}
        style={styles.textInput}
      >
        Aplicar
      </Button>
      <Button mode={'text'} onPress={handleSubmit}>
        Limpar
      </Button>
    </ScrollView>
  );
};

export default FilterForm;
