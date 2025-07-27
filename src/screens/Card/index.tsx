// External libraries
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Header from '../../components/Header';
import RadioForm from '../../components/RadioForm';
import ButtonNext from '../../components/ButtonNext';
import ModalBase from '../../components/ModalBase';
import CardForm from '../../components/CardForm';
import Button from '../../components/Button';

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
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  return (
    <View style={layout.container}>
      <ScrollView>
        <Header title={'Cartão'} isBack />
        <View style={layout.content}>
          <RadioForm title={'Cartões salvos'} items={savedCard} />
          <Button mode={'text'} onPress={showModal}>
            Adicionar cartão
          </Button>
        </View>
      </ScrollView>
      <View style={layout.footer}>
        <ButtonNext
          onPress={handleGoToAllDone}
          title={'Finalizar'}
          amount={'30,00'}
        />
        <ModalBase
          title={'Adicione cartão'}
          visible={visible}
          setVisible={setVisible}
        >
          <CardForm />
        </ModalBase>
      </View>
    </View>
  );
};

export default Address;
