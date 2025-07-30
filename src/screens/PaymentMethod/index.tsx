// External libraries
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Header from '../../components/Header';
import RadioForm from '../../components/RadioForm';
import ButtonNext from '../../components/ButtonNext';

// Constants
import { paymentMethod } from '../../constants/paymentMethod';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

// Styles
import { layout } from '../../styles/globalStyle';
import { useSnackbar } from '../../contexts/SnackbarContext';

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
      <ScrollView>
        <Header title={'Método de pagamento'} isBack />
        <View style={layout.content}>
          <RadioForm
            title={'Escolha o método de pagamento'}
            items={paymentMethod}
            value={value}
            setValue={setValue}
          />
        </View>
      </ScrollView>
      <View style={layout.footer}>
        <ButtonNext
          onPress={handleGoToCard}
          title={value === 'Dinheiro' ? 'Finalizar' : 'Continuar'}
          amount={totalPrice.toString()}
        />
      </View>
    </View>
  );
};

export default PaymentMethod;
