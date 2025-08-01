// External libraries
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

// Components
import Header from '../../components/Header';
import RadioForm from '../../components/RadioForm';
import ButtonNext from '../../components/ButtonNext';
import ModalBase from '../../components/ModalBase';
import CardForm from '../../components/CardForm';
import Button from '../../components/Button';

// Contexts
import { useSnackbar } from '../../contexts/SnackbarContext';

// Hooks
import { useSavedCards } from '../../hooks/common/useSavedCard';
import { useCreateOrder } from '../../hooks/common/useCreateOrder';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

// Styles
import { layout } from '../../styles/globalStyle';

const Card: React.FC = () => {
  const route = useRoute<RouteProp<RoutesProps, 'Card'>>();
  const { showSnackbar } = useSnackbar();
  const { handleCreateOrder } = useCreateOrder();
  const { totalPrice, paymentMethod, address } = route.params;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState('');

  const savedCards = useSavedCards(isModalVisible);

  const onFinish = async () => {
    if (!selectedCardId) {
      showSnackbar('Selecione um cartão para concluir o pagamento.');
      return;
    }

    await handleCreateOrder({ paymentMethod, address });
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
          onPress={onFinish}
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
