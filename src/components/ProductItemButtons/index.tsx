import { TouchableOpacity, View } from 'react-native';
import { createStyles } from './styles';
import Text from '../Text';
import Subtract from '../../assets/icons/Subtract';
import Plus from '../../assets/icons/Plus';
import { useAppTheme } from '../../hooks/useAppTheme';

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
