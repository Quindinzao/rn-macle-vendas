// External libraries
import { View } from 'react-native';

// Components
import ProductItemImage from '../ProductItemImage';
import ProductItemInfo from '../ProductItemInfo';
import ProductItemButtons from '../ProductItemButtons';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Utils
import { screenWidth } from '../../utils/helpers/dimensions';

// Styles
import { createStyle } from './styles';

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
