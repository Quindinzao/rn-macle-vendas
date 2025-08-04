// External libraries
import { useState } from 'react';
import { View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Footer from '../../components/Footer';
import SelectableScreen from '../../components/SelectableScreen';

// Contexts
import { useSnackbar } from '../../contexts/SnackbarContext';

// Hooks
import { useCreateOrder } from '../../hooks/common/useCreateOrder';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

// Constants
import { transport } from '../../constants/transport';

// Styles
import { layout } from '../../styles/globalStyle';

const Delivery: React.FC = () => {
  const [value, setValue] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RoutesProps>>();
  const route = useRoute<RouteProp<RoutesProps, 'Delivery'>>();
  const { totalPrice } = route.params;
  const { showSnackbar } = useSnackbar();
  const { handleCreateOrder } = useCreateOrder();

  const onConfirm = async () => {
    if (value === 'Vou buscar') {
      await handleCreateOrder();
    } else if (value === 'Sim!') {
      navigation.navigate('Address', { totalPrice });
    } else {
      showSnackbar('Selecione uma opção.');
    }
  };

  return (
    <View style={layout.container}>
      <SelectableScreen
        title={'Transporte'}
        radioTitle={'Deseja que produto vá até você?'}
        items={transport}
        value={value}
        setValue={setValue}
      />
      <Footer
        onPress={onConfirm}
        title={value === 'Vou buscar' ? 'Finalizar' : 'Continuar'}
        amount={totalPrice.toFixed(2).replace('.', ',')}
      />
    </View>
  );
};

export default Delivery;
