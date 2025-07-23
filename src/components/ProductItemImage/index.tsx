import { Image, View } from 'react-native';
import { createStyles } from './styles';
import { Theme } from '../../styles/theme';
import { useTheme } from 'react-native-paper';

const ProductItemImage: React.FC = () => {
  const theme: Theme = useTheme();
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
