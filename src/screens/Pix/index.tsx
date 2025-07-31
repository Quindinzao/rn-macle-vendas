// External libraries
import { ScrollView, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Header from '../../components/Header';
import ButtonNext from '../../components/ButtonNext';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

// Styles
import { layout } from '../../styles/globalStyle';
import { useCartContext } from '../../contexts/CartContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_KEY } from '../../constants/authKey';
import { useOrderRequest } from '../../hooks/services/useOrderRequest';
import { useSnackbar } from '../../contexts/SnackbarContext';

const Pix: React.FC = () => {
  const { cartItems, deleteAllCart } = useCartContext();
  const { createOrder } = useOrderRequest();
  const { showSnackbar } = useSnackbar();
  const navigation = useNavigation<NativeStackNavigationProp<RoutesProps>>();
  const route = useRoute<RouteProp<RoutesProps, 'Pix'>>();
  const { paymentMethod, address } = route.params;

  const handleCreateOrder = async () => {
    try {
      const storedAuth = await AsyncStorage.getItem(AUTH_KEY);
      const authData = storedAuth ? JSON.parse(storedAuth) : null;

      await createOrder(
        authData?.userId,
        cartItems.map(item => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
        paymentMethod,
        address,
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
  };

  return (
    <View style={layout.center}>
      <ScrollView>
        <Header title={'PIX'} isBack />
        <View style={layout.content} />
      </ScrollView>
      <View style={layout.footer}>
        <ButtonNext
          onPress={handleCreateOrder}
          title={'Finalizar'}
          amount={'30,00'}
        />
      </View>
    </View>
  );
};

export default Pix;
