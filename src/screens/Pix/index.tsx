// External libraries
import { ScrollView, View } from 'react-native';

// Components
import Header from '../../components/Header';
import ButtonNext from '../../components/ButtonNext';

// Styles
import { layout } from '../../styles/globalStyle';

const Pix: React.FC = () => {
  return (
    <View style={layout.center}>
      <ScrollView>
        <Header title={'PIX'} />
        <View style={layout.content} />
      </ScrollView>
      <View style={layout.footer}>
        <ButtonNext />
      </View>
    </View>
  );
};

export default Pix;
