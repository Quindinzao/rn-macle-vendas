/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

// Components
import Header from '../../components/Header';
import SearchRow from '../../components/SearchRow';
import ProductItem from '../../components/ProductItem';
import ModalBase from '../../components/ModalBase';
import FilterForm from '../../components/FilterForm';

// Services
import useProductsRequests from '../../hooks/services/useProductsRequest';

// Styles
import { layout } from '../../styles/globalStyle';

const Home: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const LIMIT = 10;

  const { productAll } = useProductsRequests();
  const loadingRef = useRef(false);

  const fetchProducts = useCallback(async () => {
    if (loadingRef.current || !hasMore) return;

    loadingRef.current = true;
    setLoading(true);

    try {
      const response = await productAll(LIMIT, offset);
      if (response.products?.length > 0) {
        setProducts(prev => [...prev, ...response.products]);
        setOffset(prev => prev + LIMIT);
      }
      setHasMore(response.hasMore);
    } catch (error) {
      console.log('Erro ao carregar produtos', error);
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  }, [offset, hasMore]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const showModal = () => setVisible(true);

  return (
    <>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={() => <ProductItem />}
        ListHeaderComponent={
          <View style={layout.headerContainer}>
            <Header title={'Produtos'} />
            <SearchRow onPress={showModal} />
          </View>
        }
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" /> : null
        }
        onEndReached={fetchProducts}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        style={layout.flatListContainer}
        contentContainerStyle={layout.flatListContent}
      />
      <ModalBase
        title="Filtros e ordenação"
        visible={visible}
        setVisible={setVisible}
      >
        <FilterForm />
      </ModalBase>
    </>
  );
};

export default Home;
