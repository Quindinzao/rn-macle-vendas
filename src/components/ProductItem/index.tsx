/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import { useEffect, useState } from 'react';
import { View } from 'react-native';

// Components
import ProductItemImage from '../ProductItemImage';
import ProductItemInfo from '../ProductItemInfo';
import ProductItemButtons from '../ProductItemButtons';

// Database
import {
  deleteCart,
  insertOrUpdateOrder,
  updateOrder,
} from '../../database/cart';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Utils
import { screenWidth } from '../../utils/helpers/dimensions';

// Interfaces
import { ProductItemProps } from '../../interfaces/ProductItemProps';

// Styles
import { createStyle } from './styles';

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  orderId,
  quantityInitial = 0,
}) => {
  const theme = useAppTheme();
  const styles = createStyle(theme, screenWidth);
  const [quantity, setQuantity] = useState(quantityInitial);

  const syncWithDB = async (quantityProducts: number) => {
    try {
      if (quantity > 0) {
        if (orderId) {
          await updateOrder(
            orderId,
            quantityProducts * product.price,
            quantityProducts,
          );
        } else {
          await insertOrUpdateOrder({
            quantity: quantityProducts,
            Product: {
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              description: product.description,
            },
          });
        }
      } else if (orderId) {
        await deleteCart(orderId);
      }
    } catch (e) {
      console.error('Erro ao sincronizar item com carrinho:', e);
    }
  };

  useEffect(() => {
    syncWithDB(quantity);
  }, [quantity]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <ProductItemImage image={product.image} />
          <ProductItemInfo
            name={product.name}
            price={product.price}
            description={product.description}
          />
        </View>
        <ProductItemButtons quantity={quantity} setQuantity={setQuantity} />
        <View />
      </View>
      <View style={styles.line} />
    </>
  );
};

export default ProductItem;
