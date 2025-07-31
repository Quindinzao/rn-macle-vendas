// External libraries
import { View } from 'react-native';

// Components
import Text from '../Text';
import Button from '../Button';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Interfaces
import { ButtonNextProps } from '../../interfaces/ButtonProps';

// Utils
import { screenWidth } from '../../utils/helpers/dimensions';

// Styles
import { createStyles } from './styles';

const ButtonNext: React.FC<ButtonNextProps> = ({ onPress, title, amount }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme, screenWidth);

  return (
    <View style={styles.container}>
      <View style={styles.textContent}>
        <Text style={styles.text}>Total: </Text>
        <Text type={'titleMedium'}>R${amount}</Text>
      </View>
      <Button onPress={onPress}>{title}</Button>
    </View>
  );
};

export default ButtonNext;
