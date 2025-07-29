// External libraries
import { FlatList, RefreshControl, View } from 'react-native';

// Components
import HeaderSection from '../HeaderSection';
import ProductItem from '../ProductItem';
import ButtonNext from '../ButtonNext';
import EmptyList from '../EmptyList';

// Interfaces
import { CartItem } from '../../interfaces/CartItemProps';

// Styles
import { layout } from '../../styles/globalStyle';

interface ShoppingCartViewProps {
  cartItems: CartItem[];
  totalPrice: number;
  refreshing: boolean;
  onRefresh: () => void;
  onGoToDelivery: () => void;
}

const ShoppingCartView: React.FC<ShoppingCartViewProps> = ({
  cartItems,
  totalPrice,
  refreshing,
  onRefresh,
  onGoToDelivery,
}) => {
  return (
    <>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        renderItem={({ item }) => (
          <ProductItem
            product={{
              id: item.productId,
              name: item.productName,
              image: item.productImage,
              description: item.productDescription,
              price: item.productPrice,
            }}
            orderId={item.id}
            quantityInitial={item.quantity}
          />
        )}
        ListHeaderComponent={<HeaderSection title={'Carrinho'} />}
        ListEmptyComponent={
          <EmptyList message={'Lista vazia. Adicione itens ao seu carrinho.'} />
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={layout.flatListContent}
        style={layout.flatListContainer}
      />

      {cartItems.length > 0 && (
        <View style={layout.footer}>
          <ButtonNext
            onPress={onGoToDelivery}
            title={'Continuar'}
            amount={totalPrice.toFixed(2).replace('.', ',')}
          />
        </View>
      )}
    </>
  );
};

export default ShoppingCartView;
