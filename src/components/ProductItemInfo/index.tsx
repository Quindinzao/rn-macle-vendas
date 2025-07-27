// External libraries
import { View } from 'react-native';

// Components
import Text from '../Text';

// Utils
import { screenWidth } from '../../utils/helpers/dimensions';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Styles
import { createStyles } from './styles';

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
