// External libraries
import { useState } from 'react';
import { View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

// Components
import Footer from '../../components/Footer';
import ModalCardForm from '../../components/ModalCardForm';
import SelectableScreen from '../../components/SelectableScreen';

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
      <SelectableScreen
        title={'Cartão'}
        radioTitle={'Cartões salvos'}
        items={savedCards}
        value={selectedCardId}
        setValue={setSelectedCardId}
        showAddButton
        onAddPress={() => setIsModalVisible(true)}
        addButtonLabel={'Adicionar cartão'}
      />
      <Footer
        onPress={onFinish}
        title={'Finalizar'}
        amount={totalPrice.toFixed(2).replace('.', ',')}
      />

      <ModalCardForm visible={isModalVisible} setVisible={setIsModalVisible} />
    </View>
  );
};

export default Card;
