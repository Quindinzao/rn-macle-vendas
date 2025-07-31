// External libraries
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import Header from '../../components/Header';
import RadioForm from '../../components/RadioForm';
import ButtonNext from '../../components/ButtonNext';
import ModalBase from '../../components/ModalBase';
import CardForm from '../../components/CardForm';
import Button from '../../components/Button';

// Contexts
import { useSnackbar } from '../../contexts/SnackbarContext';
import { useCartContext } from '../../contexts/CartContext';

// Hooks
import { useOrderRequest } from '../../hooks/services/useOrderRequest';
import { useSavedCards } from '../../hooks/common/useSavedCard';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

// Constants
import { AUTH_KEY } from '../../constants/authKey';

// Styles
import { layout } from '../../styles/globalStyle';

const Card: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesProps>>();
  const route = useRoute<RouteProp<RoutesProps, 'Card'>>();
  const { showSnackbar } = useSnackbar();
  const { createOrder } = useOrderRequest();

  const { totalPrice, paymentMethod, address } = route.params;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState('');

  const savedCards = useSavedCards(isModalVisible);
  const { cartItems, deleteAllCart } = useCartContext();

  const handleCreateOrder = async () => {
    if (!selectedCardId) {
      showSnackbar('Selecione um cartão para concluir o pagamento.');
      return;
    }

    if (!cartItems || cartItems.length === 0) {
      showSnackbar('Seu carrinho está vazio.');
      return;
    }

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
    <View style={layout.container}>
      <ScrollView>
        <Header title="Cartão" isBack />
        <View style={layout.content}>
          <RadioForm
            title="Cartões salvos"
            items={savedCards}
            value={selectedCardId}
            setValue={setSelectedCardId}
          />
          <Button mode="text" onPress={() => setIsModalVisible(true)}>
            Adicionar cartão
          </Button>
        </View>
      </ScrollView>

      <View style={layout.footer}>
        <ButtonNext
          onPress={handleCreateOrder}
          title="Finalizar"
          amount={totalPrice.toFixed(2).replace('.', ',')}
        />
        <ModalBase
          title="Adicione cartão"
          visible={isModalVisible}
          setVisible={setIsModalVisible}
        >
          <CardForm setVisible={setIsModalVisible} />
        </ModalBase>
      </View>
    </View>
  );
};

export default Card;
