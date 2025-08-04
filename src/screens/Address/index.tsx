// External libraries
import { useState } from 'react';
import { View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Footer from '../../components/Footer';
import ModalAddressForm from '../../components/ModalAddressForm';
import SelectableScreen from '../../components/SelectableScreen';

// Contexts
import { useSnackbar } from '../../contexts/SnackbarContext';

// Hooks
import { useSavedAddresses } from '../../hooks/common/useSavedAddress';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

// Styles
import { layout } from '../../styles/globalStyle';

const Address: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesProps>>();
  const route = useRoute<RouteProp<RoutesProps, 'Address'>>();

  const [selectedAddress, setSelectedAddress] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const savedAddresses = useSavedAddresses(isModalVisible);
  const { totalPrice } = route.params;

  const handleContinue = () => {
    if (!selectedAddress) {
      return showSnackbar('Selecione um endereço.');
    }

    navigation.navigate('PaymentMethod', {
      totalPrice,
      address: selectedAddress,
    });
  };

  const { showSnackbar } = useSnackbar();

  return (
    <View style={layout.container}>
      <SelectableScreen
        title={'Endereço'}
        radioTitle={'Endereços salvos'}
        items={savedAddresses}
        value={selectedAddress}
        setValue={setSelectedAddress}
        showAddButton
        onAddPress={() => setIsModalVisible(true)}
        addButtonLabel={'Adicionar endereço'}
      />

      <Footer
        onPress={handleContinue}
        title={'Continuar'}
        amount={totalPrice.toFixed(2).replace('.', ',')}
      />

      <ModalAddressForm
        visible={isModalVisible}
        setVisible={setIsModalVisible}
      />
    </View>
  );
};

export default Address;
