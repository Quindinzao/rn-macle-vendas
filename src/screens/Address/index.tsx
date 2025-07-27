// External libraries
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Header from '../../components/Header';
import RadioForm from '../../components/RadioForm';
import ButtonNext from '../../components/ButtonNext';
import AddressForm from '../../components/AddressForm';
import Button from '../../components/Button';
import ModalBase from '../../components/ModalBase';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

// Constants
import { savedAddress } from '../../constants/savedAddress';

// Styles
import { layout } from '../../styles/globalStyle';

const Address: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesProps>>();
  const handleGoToPaymentMethod = () => {
    navigation.navigate('PaymentMethod');
  };

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);

  return (
    <View style={layout.container}>
      <ScrollView>
        <Header title={'Endereço'} isBack />
        <View style={layout.content}>
          <RadioForm title={'Endereços salvos'} items={savedAddress} />
          <Button mode={'text'} onPress={showModal}>
            Adicionar endereço
          </Button>
        </View>
      </ScrollView>
      <View style={layout.footer}>
        <ButtonNext
          onPress={handleGoToPaymentMethod}
          title={'Continuar'}
          amount={'30,00'}
        />
        <ModalBase
          title={'Adicione o endereço de entrega'}
          visible={visible}
          setVisible={setVisible}
        >
          <AddressForm />
        </ModalBase>
      </View>
    </View>
  );
};

export default Address;
