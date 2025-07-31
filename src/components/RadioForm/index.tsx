// External libraries
import { View } from 'react-native';

// Components
import Text from '../Text';
import RadioButton from '../RadioButton';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Interfaces
import { RadioFormProps } from '../../interfaces/RadioProps';

// Styles
import { createStyles } from './styles';

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
