/* eslint-disable react-hooks/exhaustive-deps */
// Externsl libraries
import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

// Database
import { getAllCart } from '../../database/cart';

// Interfaces
import { CartItem } from '../../interfaces/CartItemProps';

export const useCartController = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [refreshing, setRefreshing] = useState(false);

  const loadCart = async () => {
    try {
      const items = await getAllCart();
      setCartItems(items);
      const total = items.reduce((sum, item) => sum + item.price, 0);
      setTotalPrice(total);
    } catch (error) {
      console.log('Erro ao carregar o carrinho:', error);
    }
  };

  const refreshCart = async () => {
    setRefreshing(true);
    await loadCart();
    setRefreshing(false);
  };

  useFocusEffect(
    useCallback(() => {
      refreshCart();
    }, []),
  );

  return {
    cartItems,
    totalPrice,
    refreshing,
    refreshCart,
  };
};
