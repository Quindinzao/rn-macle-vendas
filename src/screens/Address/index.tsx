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
import AddressForm from '../../components/AddressForm';
import Button from '../../components/Button';
import ModalBase from '../../components/ModalBase';

// Contexts
import { useSnackbar } from '../../contexts/SnackbarContext';

// Database
import { getAllAddresses } from '../../database/address';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

// Styles
import { layout } from '../../styles/globalStyle';

const Address: React.FC = () => {
  const { showSnackbar } = useSnackbar();
  const [savedAddress, setSavedAddress] = useState<{ title: string }[]>([]);
  const [value, setValue] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RoutesProps>>();
  const route = useRoute<RouteProp<RoutesProps, 'Address'>>();
  const { totalPrice } = route.params;

  const handleGoToPaymentMethod = () => {
    if (value) {
      navigation.navigate('PaymentMethod', { totalPrice, address: value });
    } else {
      showSnackbar('Selecione um endereço.');
    }
  };

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);

  const getItemTransport = async () => {
    try {
      const items = await getAllAddresses();

      const formattedAddresses = items.map((address: any) => {
        return {
          title: `${address.streetName}, ${address.number}, ${address.neighborhood}, ${address.city} - ${address.state}, ${address.cep}`,
        };
      });

      setSavedAddress(formattedAddresses);
    } catch (err: any) {
      showSnackbar('Falha ao mostrar endereços.');
    }
  };

  useEffect(() => {
    getItemTransport();
  }, [visible]);

  return (
    <View style={layout.container}>
      <ScrollView>
        <Header title={'Endereço'} isBack />
        <View style={layout.content}>
          <RadioForm
            title={'Endereços salvos'}
            items={savedAddress || []}
            value={value}
            setValue={setValue}
          />
          <Button mode={'text'} onPress={showModal}>
            Adicionar endereço
          </Button>
        </View>
      </ScrollView>
      <View style={layout.footer}>
        <ButtonNext
          onPress={handleGoToPaymentMethod}
          title={'Continuar'}
          amount={totalPrice.toString()}
        />
        <ModalBase
          title={'Adicione o endereço de entrega'}
          visible={visible}
          setVisible={setVisible}
        >
          <AddressForm setVisible={setVisible} />
        </ModalBase>
      </View>
    </View>
  );
};

export default Address;
