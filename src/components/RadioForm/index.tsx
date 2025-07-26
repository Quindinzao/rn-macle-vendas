import { View } from 'react-native';
import Text from '../Text';
import RadioButton from '../RadioButton';
import { createStyles } from './styles';
import { useAppTheme } from '../../hooks/useAppTheme';

interface RadioFormProps {
  title: string;
  items: { title: string; image?: any }[];
}

const RadioForm: React.FC<RadioFormProps> = ({ title, items }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text} type={'titleSmall'}>
        {title}
      </Text>
      <RadioButton items={items} />
    </View>
  );
};

export default RadioForm;
