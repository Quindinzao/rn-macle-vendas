// External libraries
import { ScrollView, View } from 'react-native';

// Components
import Header from '../../components/Header';
import RadioForm from '../../components/RadioForm';
import ButtonNext from '../../components/ButtonNext';

// Constants
import { savedAddress } from '../../constants/savedAddress';

// Styles
import { layout } from '../../styles/globalStyle';

const Address: React.FC = () => {
  return (
    <View style={layout.container}>
      <ScrollView>
        <Header title={'Endereço'} />
        <View style={layout.content}>
          <RadioForm title={'Endereços salvos'} items={savedAddress} isAdd />
        </View>
      </ScrollView>
      <View style={layout.footer}>
        <ButtonNext />
      </View>
    </View>
  );
};

export default Address;
