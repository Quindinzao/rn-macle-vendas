// External libraries
import { View } from 'react-native';

// Components
import TextField from '../TextField';
import Button from '../Button';

// Interfaces
import { SearchRowProps } from '../../interfaces/SearchProps';

// Utils
import { screenWidth } from '../../utils/helpers/dimensions';

// Assets
import Filter from '../../assets/icons/Filter';

// Styles
import { layout } from '../../styles/globalStyle';
import { createStyles } from './styles';

const SearchRow: React.FC<SearchRowProps> = ({
  onPress,
  setSearchName,
  searchName,
}) => {
  const styles = createStyles(screenWidth);

  return (
    <View style={[layout.row, styles.container]}>
      <TextField
        label={'Pesquise por nome ou descrição'}
        value={searchName || ''}
        onChangeText={event => setSearchName?.(event)}
        style={styles.textField}
      />
      <Button mode={'text'} type={'image'} onPress={onPress}>
        <Filter />
      </Button>
    </View>
  );
};

export default SearchRow;
