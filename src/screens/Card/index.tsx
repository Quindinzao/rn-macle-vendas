/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import { useEffect, useState } from 'react';
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

// Database
import { getAllCards } from '../../database/card';

// Contexts
import { useSnackbar } from '../../contexts/SnackbarContext';
import { useCartContext } from '../../contexts/CartContext';
import useOrderRequests from '../../hooks/services/useOrderRequest';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

// Constants
import { AUTH_KEY } from '../../constants/authKey';

// Assets
import Card from '../../assets/icons/Card';

// Styles
import { layout } from '../../styles/globalStyle';

const Address: React.FC = () => {
  const { cartItems } = useCartContext();
  const { showSnackbar } = useSnackbar();
  const { orderAll } = useOrderRequests();
  const navigation = useNavigation<NativeStackNavigationProp<RoutesProps>>();
  const route = useRoute<RouteProp<RoutesProps, 'Card'>>();
  const { totalPrice, paymentMethod, address } = route.params;
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const [savedCard, setSavedCard] = useState<{ title: string; image: any }[]>(
    [],
  );
  const showModal = () => setVisible(true);

  const handleGoToAllDone = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'AllDone' }],
    });
  };

  const handleCreateOrder = async () => {
    const storedAuth = await AsyncStorage.getItem(AUTH_KEY);
    const jsonStoredAuth = storedAuth ? JSON.parse(storedAuth) : null;

    if (!value) {
      showSnackbar('Selecione um cartão para concluir o pagamento.');
      return;
    }

    if (!cartItems || cartItems.length === 0) {
      showSnackbar('Seu carrinho está vazio.');
      return;
    }

    try {
      await orderAll(
        jsonStoredAuth.userId,
        cartItems.map(item => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
        paymentMethod,
        address,
      );

      handleGoToAllDone();
    } catch (err) {
      console.log({ err });
      showSnackbar('Algo deu errado ao criar o pedido.');
    }
  };

  const getItemCard = async () => {
    try {
      const items = await getAllCards();

      const formattedCard = items.map((card: any) => {
        const lastFour = card.cardNumber?.slice(-4) ?? '0000';
        const maskedNumber = `•••• •••• •••• ${lastFour}`;

        return {
          title: `${card.nickname} - ${maskedNumber}`,
          image: Card,
        };
      });

      setSavedCard(formattedCard);
    } catch (err: any) {
      showSnackbar('Falha ao mostrar cartões.');
    }
  };

  useEffect(() => {
    getItemCard();
  }, [visible]);

  return (
    <View style={layout.container}>
      <ScrollView>
        <Header title={'Cartão'} isBack />
        <View style={layout.content}>
          <RadioForm
            title={'Cartões salvos'}
            items={savedCard}
            value={value}
            setValue={setValue}
          />
          <Button mode={'text'} onPress={showModal}>
            Adicionar cartão
          </Button>
        </View>
      </ScrollView>
      <View style={layout.footer}>
        <ButtonNext
          onPress={handleCreateOrder}
          title={'Finalizar'}
          amount={totalPrice.toString()}
        />
        <ModalBase
          title={'Adicione cartão'}
          visible={visible}
          setVisible={setVisible}
        >
          <CardForm setVisible={setVisible} />
        </ModalBase>
      </View>
    </View>
  );
};

export default Address;
