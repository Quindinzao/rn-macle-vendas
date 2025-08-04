// External libraries
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Contexts
import { useCartContext } from '../../contexts/CartContext';
import { useSnackbar } from '../../contexts/SnackbarContext';

// Services
import { useOrderRequest } from '../services/useOrderRequest';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';
import { ParamsProps } from '../../interfaces/OrderProps';

// Constants
import { AUTH_KEY } from '../../constants/authKey';

export const useCreateOrder = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesProps>>();
  const { cartItems, deleteAllCart } = useCartContext();
  const { showSnackbar } = useSnackbar();
  const { createOrder } = useOrderRequest();

  const handleCreateOrder = async ({
    paymentMethod,
    address,
    onSuccessRedirect = true,
  }: ParamsProps = {}): Promise<boolean> => {
    try {
      if (!cartItems.length) {
        showSnackbar('Seu carrinho está vazio.');
        return false;
      }

      const storageKey = await AsyncStorage.getItem(AUTH_KEY);
      const userId = storageKey ? JSON.parse(storageKey).userId : null;

      await createOrder(
        userId,
        cartItems.map(item => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
        paymentMethod,
        address,
      );

      deleteAllCart();

      if (onSuccessRedirect) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'AllDone' }],
        });
      }

      return true;
    } catch (err) {
      console.error(err);
      showSnackbar('Algo deu errado ao criar o pedido.');
      return false;
    }
  };

  return { handleCreateOrder };
};
