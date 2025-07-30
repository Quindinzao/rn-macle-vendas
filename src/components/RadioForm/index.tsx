// External libraries
import { View } from 'react-native';

// Components
import Text from '../Text';
import RadioButton from '../RadioButton';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Styles
import { createStyles } from './styles';

interface RadioFormProps {
  title: string;
  items: { title: string; image?: any }[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const RadioForm: React.FC<RadioFormProps> = ({
  title,
  items,
  value,
  setValue,
}) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text} type={'titleSmall'}>
        {title}
      </Text>
      <RadioButton items={items} value={value} setValue={setValue} />
    </View>
  );
};

export default RadioForm;
