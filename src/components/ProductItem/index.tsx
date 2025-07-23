import { View } from 'react-native';
import ProductItemImage from '../ProductItemImage';
import ProductItemInfo from '../ProductItemInfo';
import { createStyle } from './styles';
import ProductItemButtons from '../ProductItemButtons';
import { Theme } from '../../styles/theme';
import { useTheme } from 'react-native-paper';

const ProductItem: React.FC = () => {
  const theme: Theme = useTheme();
  const styles = createStyle(theme);
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
