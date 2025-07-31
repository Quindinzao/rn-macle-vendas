// External libraries
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Header from '../../components/Header';
import RadioForm from '../../components/RadioForm';
import ButtonNext from '../../components/ButtonNext';
import AddressForm from '../../components/AddressForm';
import Button from '../../components/Button';
import ModalBase from '../../components/ModalBase';

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
      <ScrollView>
        <Header title="Endereço" isBack />
        <View style={layout.content}>
          <RadioForm
            title="Endereços salvos"
            items={savedAddresses}
            value={selectedAddress}
            setValue={setSelectedAddress}
          />
          <Button mode="text" onPress={() => setIsModalVisible(true)}>
            Adicionar endereço
          </Button>
        </View>
      </ScrollView>

      <View style={layout.footer}>
        <ButtonNext
          onPress={handleContinue}
          title="Continuar"
          amount={totalPrice.toString()}
        />

        <ModalBase
          title="Adicione o endereço de entrega"
          visible={isModalVisible}
          setVisible={setIsModalVisible}
        >
          <AddressForm setVisible={setIsModalVisible} />
        </ModalBase>
      </View>
    </View>
  );
};

export default Address;
