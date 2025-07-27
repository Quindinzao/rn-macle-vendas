// External libraries
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Header from '../../components/Header';
import ButtonNext from '../../components/ButtonNext';

// Routes
import { RoutesProps } from '../../interfaces/RoutesProps';

// Styles
import { layout } from '../../styles/globalStyle';

const Pix: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesProps>>();
  const handleGoToAllDone = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'AllDone' }],
    });
  };
  return (
    <View style={layout.center}>
      <ScrollView>
        <Header title={'PIX'} isBack />
        <View style={layout.content} />
      </ScrollView>
      <View style={layout.footer}>
        <ButtonNext
          onPress={handleGoToAllDone}
          title={'Finalizar'}
          amount={'30,00'}
        />
      </View>
    </View>
  );
};

export default Pix;
