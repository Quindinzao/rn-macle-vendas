// External libraries
import { TouchableOpacity, View } from 'react-native';

// Components
import Text from '../Text';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Assets
import Subtract from '../../assets/icons/Subtract';
import Plus from '../../assets/icons/Plus';

// Styles
import { createStyles } from './styles';

const ProductItemButtons: React.FC = () => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} style={styles.buttonSize}>
        <Subtract />
      </TouchableOpacity>
      <Text type={'titleSmall'} style={styles.text}>
        9
      </Text>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.buttonSize, styles.colorButton]}
      >
        <Plus />
      </TouchableOpacity>
    </View>
  );
};

export default ProductItemButtons;
