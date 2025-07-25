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
import { savedCard } from '../../constants/savedCard';

// Styles
import { layout } from '../../styles/globalStyle';

const Address: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesProps>>();
  const handleGoToAllDone = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'AllDone' }],
    });
  };
  return (
    <View style={layout.container}>
      <ScrollView>
        <Header title={'Cartão'} isBack />
        <View style={layout.content}>
          <RadioForm
            title={'Cartões salvos'}
            items={savedCard}
            buttonText={'Adicionar cartão'}
          />
        </View>
      </ScrollView>
      <View style={layout.footer}>
        <ButtonNext onPress={handleGoToAllDone} title={'Finalizar'} />
      </View>
    </View>
  );
};

export default Address;
