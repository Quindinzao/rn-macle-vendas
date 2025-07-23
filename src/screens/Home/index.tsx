// External libraries
import { View } from 'react-native';

// Components
import Header from '../../components/Header';
import SearchRow from '../../components/SearchRow';
import ProductItem from '../../components/ProductItem';

// Styles
import { layout } from '../../styles/globalStyle';
import OrderItem from '../../components/OrderItem';
import ButtonNext from '../../components/ButtonNext';

const Home: React.FC = () => {
  return (
    <View style={layout.container}>
      <Header title={'Produtos'} typeHeader={'short'} isBack />
      <SearchRow />
      <ProductItem />
      <OrderItem />
      <ButtonNext />
    </View>
  );
};

export default Home;
