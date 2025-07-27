// External libraries
import { useState } from 'react';
import { FlatList, View } from 'react-native';

// Components
import Header from '../../components/Header';
import SearchRow from '../../components/SearchRow';
import ProductItem from '../../components/ProductItem';
import ModalBase from '../../components/ModalBase';
import FilterForm from '../../components/FilterForm';

// Styles
import { layout } from '../../styles/globalStyle';

const mockData = [
  { id: '1', name: 'Produto 1' },
  { id: '2', name: 'Produto 2' },
  { id: '3', name: 'Produto 3' },
  { id: '4', name: 'Produto 4' },
  { id: '5', name: 'Produto 5' },
];

const Home: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);

  return (
    <>
      <FlatList
        data={mockData}
        keyExtractor={item => item.id}
        renderItem={() => <ProductItem />}
        ListHeaderComponent={
          <View style={layout.headerContainer}>
            <Header title={'Produtos'} />
            <SearchRow onPress={showModal} />
          </View>
        }
        showsVerticalScrollIndicator={false}
        style={layout.flatListContainer}
        contentContainerStyle={layout.flatListContent}
      />
      <ModalBase
        title={'Filtros e ordenação'}
        visible={visible}
        setVisible={setVisible}
      >
        <FilterForm />
      </ModalBase>
    </>
  );
};

export default Home;
