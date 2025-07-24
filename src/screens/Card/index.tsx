// External libraries
import { ScrollView, View } from 'react-native';

// Components
import Header from '../../components/Header';
import RadioForm from '../../components/RadioForm';
import ButtonNext from '../../components/ButtonNext';

// Constants
import { savedCard } from '../../constants/savedCard';

// Styles
import { layout } from '../../styles/globalStyle';

const Address: React.FC = () => {
  return (
    <View style={layout.container}>
      <ScrollView>
        <Header title={'Cartão'} />
        <View style={layout.content}>
          <RadioForm
            title={'Cartões salvos'}
            items={savedCard}
            buttonText={'Adicionar cartão'}
          />
        </View>
      </ScrollView>
      <View style={layout.footer}>
        <ButtonNext />
      </View>
    </View>
  );
};

export default Address;
