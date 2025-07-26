import { View } from 'react-native';
import { createStyles } from './styles';
import Text from '../Text';
import { screenWidth } from '../../utils/dimensions';
import { useAppTheme } from '../../hooks/useAppTheme';

const ProductItemInfo: React.FC = () => {
  const theme = useAppTheme();
  const styles = createStyles(theme, screenWidth);

  return (
    <View style={styles.container}>
      <Text type={'titleSmall'}>Smartphone</Text>
      <Text type={'caption'} numberOfLines={3} style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        quis euismod augue.
      </Text>
      <Text type={'titleMedium'}>R$30,00</Text>
    </View>
  );
};

export default ProductItemInfo;
