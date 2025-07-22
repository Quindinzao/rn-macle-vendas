// External libraries
import { useState } from 'react';
import { View } from 'react-native';

// Components
import TextField from '../TextField';
import Button from '../Button';

// Assets
import Filter from '../../assets/icons/Filter';

// Styles
import { layout } from '../../styles/globalStyle';
import { styles } from './styles';

const SearchRow: React.FC = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={layout.row}>
      <View style={styles.textField}>
        <TextField
          label={'Pesquise por nome ou descrição'}
          value={search}
          onChangeText={event => setSearch(event)}
        />
      </View>
      <Button mode={'text'} type={'image'} onPress={() => console.log()}>
        <Filter />
      </Button>
    </View>
  );
};

export default SearchRow;
