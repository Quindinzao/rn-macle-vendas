// External libraries
import { ScrollView, View } from 'react-native';

// Components
import Header from '../../components/Header';
import RadioForm from '../../components/RadioForm';
import ButtonNext from '../../components/ButtonNext';

// Constants
import { transport } from '../../constants/transport';

// Styles
import { layout } from '../../styles/globalStyle';

const Delivery: React.FC = () => {
  return (
    <View style={layout.container}>
      <ScrollView>
        <Header title={'Transporte'} />
        <View style={layout.content}>
          <RadioForm
            title={'Deseja que produto vá até você?'}
            items={transport}
          />
        </View>
      </ScrollView>
      <View style={layout.footer}>
        <ButtonNext />
      </View>
    </View>
  );
};

export default Delivery;
