import { View } from 'react-native';
import Text from '../Text';
import Button from '../Button';
import { createStyles } from './styles';
import { screenWidth } from '../../utils/dimensions';
import { useAppTheme } from '../../hooks/useAppTheme';

interface ButtonNextProps {
  onPress: () => void;
  title: string;
}

const ButtonNext: React.FC<ButtonNextProps> = ({ onPress, title }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme, screenWidth);

  return (
    <View style={styles.container}>
      <View style={styles.textContent}>
        <Text style={styles.text}>Total: </Text>
        <Text type={'titleMedium'}>R$30,00</Text>
      </View>
      <Button onPress={onPress}>{title}</Button>
    </View>
  );
};

export default ButtonNext;
