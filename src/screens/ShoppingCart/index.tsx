// External libraries
import { FlatList, View } from 'react-native';

// Components
import Header from '../../components/Header';
import SearchRow from '../../components/SearchRow';
import ProductItem from '../../components/ProductItem';
import ButtonNext from '../../components/ButtonNext';

// Styles
import { layout } from '../../styles/globalStyle';

const mockData = [
  { id: '1', name: 'Produto 1' },
  { id: '2', name: 'Produto 2' },
  { id: '3', name: 'Produto 3' },
  { id: '4', name: 'Produto 4' },
  { id: '5', name: 'Produto 5' },
  { id: '6', name: 'Produto 6' },
  { id: '7', name: 'Produto 7' },
  { id: '8', name: 'Produto 8' },
  { id: '9', name: 'Produto 9' },
];

const ShoppingCart: React.FC = () => {
  return (
    <>
      <FlatList
        data={mockData}
        keyExtractor={item => item.id}
        renderItem={() => <ProductItem />}
        ListHeaderComponent={
          <View style={layout.headerContainer}>
            <Header title={'Carrinho'} />
            <SearchRow />
          </View>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={layout.flatListContent}
        style={layout.flatListContainer}
      />

      <View style={layout.footer}>
        <ButtonNext />
      </View>
    </>
  );
};

export default ShoppingCart;
