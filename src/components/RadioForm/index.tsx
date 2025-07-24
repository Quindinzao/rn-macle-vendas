import { View } from 'react-native';
import Text from '../Text';
import RadioButton from '../RadioButton';
import { Theme } from '../../styles/theme';
import { createStyles } from './styles';
import { useTheme } from 'react-native-paper';
import Button from '../Button';

interface RadioFormProps {
  title: string;
  items: { title: string; image?: any }[];
  isAdd?: boolean;
}

const RadioForm: React.FC<RadioFormProps> = ({ title, items, isAdd }) => {
  const theme: Theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <Text style={styles.text} type={'titleSmall'}>
        {title}
      </Text>
      <RadioButton items={items} />
      {isAdd && (
        <Button
          mode={'text'}
          onPress={() => console.log('')}
          style={styles.button}
        >
          Adicionar endereço
        </Button>
      )}
    </View>
  );
};

export default RadioForm;
