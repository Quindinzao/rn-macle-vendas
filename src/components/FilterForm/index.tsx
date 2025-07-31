// External libraries
import { ScrollView } from 'react-native';

// Components
import Button from '../Button';
import RadioForm from '../RadioForm';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Constants
import { filterOptions } from '../../constants/filterOptions';

// Styles
import { createStyles } from './styles';

interface FilterFormProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const FilterForm: React.FC<FilterFormProps> = ({ value, setValue }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps={'handled'}
      showsVerticalScrollIndicator={false}
    >
      <RadioForm
        title={'Ordene:'}
        items={filterOptions}
        value={value}
        setValue={setValue}
      />
      <Button mode={'text'} onPress={() => setValue('')}>
        Limpar
      </Button>
    </ScrollView>
  );
};

export default FilterForm;
