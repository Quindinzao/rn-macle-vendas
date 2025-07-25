// External libraries
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Header from '../../components/Header';
import RadioForm from '../../components/RadioForm';
import ButtonNext from '../../components/ButtonNext';

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
  return (
    <View style={layout.container}>
      <ScrollView>
        <Header title={'Endereço'} isBack />
        <View style={layout.content}>
          <RadioForm
            title={'Endereços salvos'}
            items={savedAddress}
            buttonText={'Adicionar endereço'}
          />
        </View>
      </ScrollView>
      <View style={layout.footer}>
        <ButtonNext onPress={handleGoToPaymentMethod} title={'Continuar'} />
      </View>
    </View>
  );
};

export default Address;
