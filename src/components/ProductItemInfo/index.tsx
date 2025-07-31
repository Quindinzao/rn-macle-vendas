// External libraries
import { View } from 'react-native';

// Components
import Text from '../Text';

// Utils
import { screenWidth } from '../../utils/helpers/dimensions';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Interfaces
import { ProductItemInfoProps } from '../../interfaces/ProductProps';

// Styles
import { createStyles } from './styles';

const ProductItemInfo: React.FC<ProductItemInfoProps> = ({
  description,
  price,
  name,
}) => {
  const theme = useAppTheme();
  const styles = createStyles(theme, screenWidth);

  return (
    <View style={styles.container}>
      <Text type={'titleSmall'} style={styles.text}>
        {name}
      </Text>
      <Text type={'caption'} numberOfLines={3} style={styles.description}>
        {description}
      </Text>
      <Text type={'titleMedium'} style={styles.text}>
        R${price}
      </Text>
    </View>
  );
};

export default ProductItemInfo;
