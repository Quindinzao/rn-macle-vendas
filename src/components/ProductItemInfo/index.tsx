import { View } from 'react-native';
import { createStyles } from './styles';
import { Theme } from '../../styles/theme';
import { useTheme } from 'react-native-paper';
import Text from '../Text';

const ProductItemInfo: React.FC = () => {
  const theme: Theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text type={'titleSmall'}>Smartphone</Text>
      <Text type={'caption'} style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        quis euismod augue.
      </Text>
      <Text type={'titleMedium'}>R$30,00</Text>
    </View>
  );
};

export default ProductItemInfo;
