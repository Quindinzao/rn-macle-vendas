// External libraries
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import Header from '../../components/Header';
import ProductItem from '../../components/ProductItem';
import ButtonNext from '../../components/ButtonNext';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

// Styles
import { layout } from '../../styles/globalStyle';

const mockData = [
  { id: '1', name: 'Produto 1' },
  { id: '2', name: 'Produto 2' },
];

const ShoppingCart: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesProps>>();
  const handleGoToDelivery = () => {
    navigation.navigate('Delivery');
  };
  return (
    <>
      <FlatList
        data={mockData}
        keyExtractor={item => item.id}
        renderItem={() => <ProductItem />}
        ListHeaderComponent={<Header title={'Carrinho'} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={layout.flatListContent}
        style={layout.flatListContainer}
      />

      <View style={layout.footer}>
        <ButtonNext onPress={handleGoToDelivery} title={'Continuar'} />
      </View>
    </>
  );
};

export default ShoppingCart;
