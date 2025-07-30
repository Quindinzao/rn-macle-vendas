// External libraries
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Header from '../../components/Header';
import RadioForm from '../../components/RadioForm';
import ButtonNext from '../../components/ButtonNext';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

// Constants
import { transport } from '../../constants/transport';

// Styles
import { layout } from '../../styles/globalStyle';

const Delivery: React.FC = () => {
  const [value, setValue] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RoutesProps>>();
  const route = useRoute<RouteProp<RoutesProps, 'Delivery'>>();
  const { totalPrice } = route.params;

  const handleGoToAddress = () => {
    if (value === 'Sim!') {
      navigation.navigate('Address', { totalPrice });
    } else if (value === 'Vou buscar') {
      navigation.navigate('PaymentMethod', { totalPrice });
    }
  };

  return (
    <View style={layout.container}>
      <ScrollView>
        <Header title={'Transporte'} isBack />
        <View style={layout.content}>
          <RadioForm
            title={'Deseja que produto vá até você?'}
            items={transport}
            value={value}
            setValue={setValue}
          />
        </View>
      </ScrollView>
      <View style={layout.footer}>
        <ButtonNext
          onPress={handleGoToAddress}
          title={'Continuar'}
          amount={totalPrice.toString()}
        />
      </View>
    </View>
  );
};

export default Delivery;
