/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import { useCallback, useEffect, useRef, useState } from 'react';

// Database
import { getAllCart } from '../../database/cart';

// Hooks - Services
import useProductsRequests from '../../hooks/services/useProductsRequest';

export const useHomeController = () => {
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
      const cartItems = await getAllCart();

      const cartMap = new Map(cartItems.map(item => [item.productId, item]));

      const mergedProducts = response.products.map((product: { id: any }) => ({
        ...product,
        quantity: cartMap.get(product.id)?.quantity || 0,
        orderId: cartMap.get(product.id)?.id || null,
      }));

      if (response.products?.length > 0) {
        setProducts(prev => [...prev, ...mergedProducts]);
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

  return {
    visible,
    setVisible,
    products,
    loading,
    fetchProducts,
  };
};
