import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import Text from '../Text';
import Button from '../Button';
import { Theme } from '../../styles/theme';
import { createStyles } from './styles';

const ButtonNext: React.FC = () => {
  const theme: Theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.textContent}>
        <Text style={styles.text}>Total: </Text>
        <Text type={'titleMedium'}>R$30,00</Text>
      </View>
      <Button onPress={() => console.log('Clicou!')}>Continuar</Button>
    </View>
  );
};

export default ButtonNext;
