// External libraries
import { useState } from 'react';
import { View } from 'react-native';

// Components
import TextField from '../TextField';
import Button from '../Button';

// Utils
import { screenWidth } from '../../utils/dimensions';

// Assets
import Filter from '../../assets/icons/Filter';

// Styles
import { layout } from '../../styles/globalStyle';
import { createStyles } from './styles';

interface SearchRowProps {
  onPress: () => void;
}

const SearchRow: React.FC<SearchRowProps> = ({ onPress }) => {
  const [search, setSearch] = useState('');
  const styles = createStyles(screenWidth);

  return (
    <View style={[layout.row, styles.container]}>
      <TextField
        label={'Pesquise por nome ou descrição'}
        value={search}
        onChangeText={event => setSearch(event)}
        style={styles.textField}
      />
      <Button mode={'text'} type={'image'} onPress={onPress}>
        <Filter />
      </Button>
    </View>
  );
};

export default SearchRow;
