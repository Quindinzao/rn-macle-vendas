// External libraries
import { TouchableOpacity, View } from 'react-native';

// Components
import Text from '../Text';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Interfaces
import { ProductItemButtonsProps } from '../../interfaces/ProductProps';

// Assets
import Subtract from '../../assets/icons/Subtract';
import Plus from '../../assets/icons/Plus';

// Styles
import { createStyles } from './styles';

const ProductItemButtons: React.FC<ProductItemButtonsProps> = ({
  quantity,
  setQuantity,
}) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      {quantity > 0 && (
        <>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonSize}
            onPress={() => setQuantity(quantity - 1)}
          >
            <Subtract />
          </TouchableOpacity>
          <Text type={'titleSmall'} style={styles.text}>
            {quantity}
          </Text>
        </>
      )}
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.buttonSize, styles.colorButton]}
        onPress={() => setQuantity(quantity + 1)}
      >
        <Plus />
      </TouchableOpacity>
    </View>
  );
};

export default ProductItemButtons;
