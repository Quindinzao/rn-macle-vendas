// External libraries
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import ShoppingCartView from '../../components/ShoppingCartView';

// Hooks - Common
import { useCart } from '../../hooks/common/useCartController';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

const ShoppingCart: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesProps>>();
  const { cartItems, totalPrice, refreshing, refreshCart } = useCart();

  const handleGoToDelivery = () => {
    navigation.navigate('Delivery');
  };

  return (
    <ShoppingCartView
      cartItems={cartItems}
      totalPrice={totalPrice}
      refreshing={refreshing}
      onRefresh={refreshCart}
      onGoToDelivery={handleGoToDelivery}
    />
  );
};

export default ShoppingCart;
