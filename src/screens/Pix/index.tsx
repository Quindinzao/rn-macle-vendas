// External libraries
import { Image, ScrollView, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Hooks
import { useCreateOrder } from '../../hooks/common/useCreateOrder';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

// Styles
import { layout } from '../../styles/globalStyle';

const Pix: React.FC = () => {
  const route = useRoute<RouteProp<RoutesProps, 'Pix'>>();
  const { paymentMethod, address, totalPrice } = route.params;

  const { handleCreateOrder } = useCreateOrder();

  const onFinish = () => {
    handleCreateOrder({ paymentMethod, address });
  };

  return (
    <View style={layout.container}>
      <ScrollView>
        <Header title={'PIX'} isBack />
        <View style={layout.content}>
          <Image source={require('../../assets/png/qrcode.png')} />
        </View>
      </ScrollView>
      <Footer
        onPress={onFinish}
        title={'Finalizar'}
        amount={totalPrice.toFixed(2).replace('.', ',')}
      />
    </View>
  );
};

export default Pix;
