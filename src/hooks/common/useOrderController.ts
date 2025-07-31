/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Hooks
import { useOrderRequest } from '../../hooks/services/useOrderRequest';

// Constants
import { AUTH_KEY } from '../../constants/authKey';

export const useOrderController = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { orderByUserId } = useOrderRequest();

  const fetchOrders = async () => {
    const storageKey = await AsyncStorage.getItem(AUTH_KEY);
    const userId = storageKey ? JSON.parse(storageKey).userId : null;
    if (!userId) return;

    console.log('+1');

    setLoading(true);
    try {
      const response = await orderByUserId(userId);
      setOrders(response.data || []);
    } catch (error) {
      console.log('Erro ao carregar pedidos', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return {
    orders,
    loading,
    fetchOrders,
  };
};
