import { Image, View } from 'react-native';
import { createStyles } from './styles';
import { useAppTheme } from '../../hooks/useAppTheme';

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
