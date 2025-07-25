// External libraries
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Header from '../../components/Header';
import RadioForm from '../../components/RadioForm';
import ButtonNext from '../../components/ButtonNext';

// Constants
import { paymentMethod } from '../../constants/paymentMethod';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

// Styles
import { layout } from '../../styles/globalStyle';

const PaymentMethod: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesProps>>();
  const handleGoToCard = () => {
    navigation.navigate('Card');
  };
  return (
    <View style={layout.container}>
      <ScrollView>
        <Header title={'Método de pagamento'} isBack />
        <View style={layout.content}>
          <RadioForm
            title={'Escolha o método de pagamento'}
            items={paymentMethod}
          />
        </View>
      </ScrollView>
      <View style={layout.footer}>
        <ButtonNext onPress={handleGoToCard} title={'Continuar'} />
      </View>
    </View>
  );
};

export default PaymentMethod;
