/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import { useCallback, useEffect, useRef, useState } from 'react';

// Contexts
import { useCartContext } from '../../contexts/CartContext';

// Hooks - Services
import { useProductsRequest } from '../../hooks/services/useProductsRequest';

export const useHomeController = () => {
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [searchName, setSearchName] = useState('');
  const [selectedOrdering, setSelectedOrdering] = useState('');

  const LIMIT = 10;
  const { productAll } = useProductsRequest();
  const loadingRef = useRef(false);

  const { cartItems } = useCartContext();

  const syncCartQuantities = useCallback(
    (serverProducts: any[]) => {
      const cartMap = new Map(cartItems.map(item => [item.productId, item]));

      return serverProducts.map(product => ({
        ...product,
        quantity: cartMap.get(product.id)?.quantity || 0,
        orderId: cartMap.get(product.id)?.id || null,
      }));
    },
    [cartItems],
  );

  const fetchProducts = useCallback(async () => {
    if (loadingRef.current || !hasMore) return;

    loadingRef.current = true;
    setLoading(true);

    try {
      const response = await productAll(LIMIT, offset);
      const mergedProducts = syncCartQuantities(response.products || []);

      if (response.products?.length > 0) {
        const updated = [...products, ...mergedProducts];
        setProducts(updated);
        setOffset(prev => prev + LIMIT);
      }

      setHasMore(response.hasMore);
    } catch (error) {
      console.log('Erro ao carregar produtos', error);
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  }, [offset, hasMore, cartItems, products, syncCartQuantities]);

  const applyFilters = useCallback(() => {
    let filtered = [...products];

    if (searchName.trim() !== '') {
      const searchTerm = searchName.trim().toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm),
      );
    }

    if (selectedOrdering.trim() !== '') {
      if (selectedOrdering === 'A-Z') {
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
      } else if (selectedOrdering === 'Z-A') {
        filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
      }
    }

    setFilteredProducts(filtered);
  }, [products, searchName, selectedOrdering]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [products, searchName, selectedOrdering]);

  return {
    visible,
    setVisible,
    products: filteredProducts,
    loading,
    fetchProducts,
    searchName,
    setSearchName,
    selectedOrdering,
    setSelectedOrdering,
  };
};
