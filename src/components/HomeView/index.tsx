// External libraries
import { FlatList, ActivityIndicator } from 'react-native';

// Components
import HeaderSection from '../HeaderSection';
import ProductItem from '../ProductItem';
import EmptyList from '../EmptyList';

// Interfaces
import { HomeViewProps } from '../../interfaces/HomeProps';

// Styles
import { layout } from '../../styles/globalStyle';

const HomeView: React.FC<HomeViewProps> = ({
  products,
  loading,
  fetchProducts,
  setVisible,
  titleHeader,
  setSearchName,
  searchName,
}) => {
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <ProductItem
          product={item}
          orderId={item.orderId}
          quantityInitial={item.quantity}
        />
      )}
      ListHeaderComponent={
        <HeaderSection
          onFilterPress={() => setVisible(true)}
          title={titleHeader}
          setSearchName={setSearchName}
          searchName={searchName}
        />
      }
      ListFooterComponent={
        loading ? <ActivityIndicator size={'large'} /> : null
      }
      ListEmptyComponent={
        !loading ? (
          <EmptyList message={'Lista vazia. Tente novamente mais tarde.'} />
        ) : null
      }
      onEndReached={fetchProducts}
      onEndReachedThreshold={0.1}
      showsVerticalScrollIndicator={false}
      style={layout.flatListContainer}
      contentContainerStyle={layout.flatListContent}
    />
  );
};

export default HomeView;
