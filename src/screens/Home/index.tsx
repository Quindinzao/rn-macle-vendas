// External libraries
import { View } from 'react-native';

// Components
import Header from '../../components/Header';

// Styles
import { layout } from '../../styles/globalStyle';
import RadioButton from '../../components/RadioButton';

const Home: React.FC = () => {
  const list = ['Hello', 'World'];
  return (
    <View style={layout.container}>
      <Header title={'Produtos'} typeHeader={'short'} />
      <RadioButton items={list} />
    </View>
  );
};

export default Home;
