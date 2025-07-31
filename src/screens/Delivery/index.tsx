// External libraries
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Header from '../../components/Header';
import RadioForm from '../../components/RadioForm';
import ButtonNext from '../../components/ButtonNext';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

// Constants
import { transport } from '../../constants/transport';

// Styles
import { layout } from '../../styles/globalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_KEY } from '../../constants/authKey';
import { useCartContext } from '../../contexts/CartContext';
import { useOrderRequest } from '../../hooks/services/useOrderRequest';
import { useSnackbar } from '../../contexts/SnackbarContext';

const Delivery: React.FC = () => {
  const [value, setValue] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RoutesProps>>();
  const route = useRoute<RouteProp<RoutesProps, 'Delivery'>>();
  const { totalPrice } = route.params;
  const { cartItems, deleteAllCart } = useCartContext();
  const { createOrder } = useOrderRequest();
  const { showSnackbar } = useSnackbar();

  const handleCreateOrder = async () => {
    if (value === 'Vou buscar') {
      try {
        const storedAuth = await AsyncStorage.getItem(AUTH_KEY);
        const authData = storedAuth ? JSON.parse(storedAuth) : null;

        await createOrder(
          authData?.userId,
          cartItems.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
        );

        navigation.reset({
          index: 0,
          routes: [{ name: 'AllDone' }],
        });
        deleteAllCart();
      } catch (err) {
        console.error(err);
        showSnackbar('Algo deu errado ao criar o pedido.');
      }
    } else if (value === 'Sim!') {
      navigation.navigate('Address', { totalPrice });
    }
  };

  return (
    <View style={layout.container}>
      <ScrollView>
        <Header title={'Transporte'} isBack />
        <View style={layout.content}>
          <RadioForm
            title={'Deseja que produto vá até você?'}
            items={transport}
            value={value}
            setValue={setValue}
          />
        </View>
      </ScrollView>
      <View style={layout.footer}>
        <ButtonNext
          onPress={handleCreateOrder}
          title={value === 'Vou buscar' ? 'Finalizar' : 'Continuar'}
          amount={totalPrice.toString()}
        />
      </View>
    </View>
  );
};

export default Delivery;
