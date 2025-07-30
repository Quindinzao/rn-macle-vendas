/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Header from '../../components/Header';
import RadioForm from '../../components/RadioForm';
import ButtonNext from '../../components/ButtonNext';
import ModalBase from '../../components/ModalBase';
import CardForm from '../../components/CardForm';
import Button from '../../components/Button';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

// Constants
// import { savedCard } from '../../constants/savedCard';

// Styles
import { layout } from '../../styles/globalStyle';
import { getAllCards } from '../../database/card';
import Card from '../../assets/icons/Card';
import { useSnackbar } from '../../contexts/SnackbarContext';

const Address: React.FC = () => {
  const { showSnackbar } = useSnackbar();
  const navigation = useNavigation<NativeStackNavigationProp<RoutesProps>>();
  const handleGoToAllDone = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'AllDone' }],
    });
  };
  const route = useRoute<RouteProp<RoutesProps, 'Card'>>();
  const { totalPrice, paymentMethod, address } = route.params;
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const [savedCard, setSavedCard] = useState<{ title: string; image: any }[]>(
    [],
  );
  const showModal = () => setVisible(true);

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
          onPress={handleGoToAllDone}
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
