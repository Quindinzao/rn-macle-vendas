// External libraries
import { Image, View } from 'react-native';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Interfaces
import { ProductItemImageProps } from '../../interfaces/ProductProps';

// Styles
import { createStyles } from './styles';

const ProductItemImage: React.FC<ProductItemImageProps> = ({ image }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'data:image/png;base64,' + image }}
      />
    </View>
  );
};

export default ProductItemImage;
