// External libraries
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Header from '../../components/Header';
import RadioForm from '../../components/RadioForm';
import ButtonNext from '../../components/ButtonNext';

// Iterfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

// Constants
import { transport } from '../../constants/transport';

// Styles
import { layout } from '../../styles/globalStyle';

const Delivery: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesProps>>();
  const handleGoToAddress = () => {
    navigation.navigate('Address');
  };
  return (
    <View style={layout.container}>
      <ScrollView>
        <Header title={'Transporte'} isBack />
        <View style={layout.content}>
          <RadioForm
            title={'Deseja que produto vá até você?'}
            items={transport}
          />
        </View>
      </ScrollView>
      <View style={layout.footer}>
        <ButtonNext onPress={handleGoToAddress} title={'Continuar'} />
      </View>
    </View>
  );
};

export default Delivery;
