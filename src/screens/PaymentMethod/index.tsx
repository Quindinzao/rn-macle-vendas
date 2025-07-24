// External libraries
import { ScrollView, View } from 'react-native';

// Components
import Header from '../../components/Header';
import RadioForm from '../../components/RadioForm';
import ButtonNext from '../../components/ButtonNext';

// Constants
import { paymentMethod } from '../../constants/paymentMethod';

// Styles
import { layout } from '../../styles/globalStyle';

const PaymentMethod: React.FC = () => {
  return (
    <View style={layout.container}>
      <ScrollView>
        <Header title={'Método de pagamento'} />
        <View style={layout.content}>
          <RadioForm
            title={'Escolha o método de pagamento'}
            items={paymentMethod}
          />
        </View>
      </ScrollView>
      <View style={layout.footer}>
        <ButtonNext />
      </View>
    </View>
  );
};

export default PaymentMethod;
