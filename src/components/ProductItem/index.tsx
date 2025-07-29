/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import { useEffect, useState } from 'react';
import { View } from 'react-native';

// Components
import ProductItemImage from '../ProductItemImage';
import ProductItemInfo from '../ProductItemInfo';
import ProductItemButtons from '../ProductItemButtons';

// Contexts
import { useCartContext } from '../../contexts/CartContext';

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
  const { createItem, updateItem, removeItem } = useCartContext();
  const theme = useAppTheme();
  const styles = createStyle(theme, screenWidth);

  const [quantity, setQuantity] = useState(quantityInitial);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const syncWithDB = async (quantityProducts: number) => {
    try {
      if (quantityProducts > 0) {
        if (orderId) {
          updateItem({
            id: orderId,
            quantity: quantityProducts,
            productPrice: product.price,
          });
        } else {
          createItem({
            price: product.price,
            productDescription: product.description,
            productId: product.id,
            productImage: product.image,
            productName: product.name,
            productPrice: product.price,
            quantity: quantityProducts,
          });
        }
      } else if (orderId) {
        removeItem(orderId);
      }
    } catch (e) {
      console.log('Erro ao sincronizar item com carrinho:', e);
    }
  };

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    syncWithDB(quantity);
  }, [quantity]);

  useEffect(() => {
    setQuantity(quantityInitial);
  }, [quantityInitial]);

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
