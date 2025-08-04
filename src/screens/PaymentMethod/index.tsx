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

// Constants
import { paymentMethod } from '../../constants/paymentMethod';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

// Styles
import { layout } from '../../styles/globalStyle';

const PaymentMethod: React.FC = () => {
  const [value, setValue] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RoutesProps>>();
  const route = useRoute<RouteProp<RoutesProps, 'PaymentMethod'>>();
  const { totalPrice, address } = route.params;
  const { showSnackbar } = useSnackbar();

  const handleGoToCard = () => {
    if (value === 'Cartão de crédito' || value === 'Cartão de débito') {
      navigation.navigate('Card', {
        totalPrice,
        address,
        paymentMethod: value,
      });
    } else if (value === 'Dinheiro') {
      navigation.navigate('AllDone');
    } else if (value === 'PIX') {
      navigation.navigate('Pix', { totalPrice, address, paymentMethod: value });
    } else {
      showSnackbar('Selecione um método de pagamento.');
    }
  };

  return (
    <View style={layout.container}>
      <SelectableScreen
        title={'Método de pagamento'}
        radioTitle={'Escolha o método de pagamento'}
        items={paymentMethod}
        value={value}
        setValue={setValue}
      />
      <Footer
        onPress={handleGoToCard}
        title={value === 'Dinheiro' ? 'Finalizar' : 'Continuar'}
        amount={totalPrice.toFixed(2).replace('.', ',')}
      />
    </View>
  );
};

export default PaymentMethod;
