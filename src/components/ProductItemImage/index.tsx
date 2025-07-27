// External libraries
import { Image, View } from 'react-native';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Styles
import { createStyles } from './styles';

const ProductItemImage: React.FC = () => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/png/telephone.png')}
      />
    </View>
  );
};

export default ProductItemImage;
