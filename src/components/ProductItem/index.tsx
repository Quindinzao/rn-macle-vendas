import { View } from 'react-native';
import ProductItemImage from '../ProductItemImage';
import ProductItemInfo from '../ProductItemInfo';
import { createStyle } from './styles';
import ProductItemButtons from '../ProductItemButtons';
import { screenWidth } from '../../utils/dimensions';
import { useAppTheme } from '../../hooks/useAppTheme';

const ProductItem: React.FC = () => {
  const theme = useAppTheme();
  const styles = createStyle(theme, screenWidth);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <ProductItemImage />
          <ProductItemInfo />
        </View>
        <ProductItemButtons />
        <View />
      </View>
      <View style={styles.line} />
    </>
  );
};

export default ProductItem;
