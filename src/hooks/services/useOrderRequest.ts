// Services
import { useApi } from './useApi';

export const useOrderRequest = () => {
  const { api } = useApi();

  return {
    createOrder: async (
      userId: number,
      products: { productId: number; quantity: number }[],
      paymentMethod?: string,
      address?: string,
    ) => {
      const payload: any = {
        items: products,
        status: 'pendente',
      };

      if (paymentMethod) {
        payload.paymentMethod = paymentMethod;
      }

      if (address) {
        payload.address = address;
      }

      return await api.post(`/orders/user/${userId}`, payload);
    },
    orderByUserId: async (userId: number) => {
      return await api.get(`/orders/user/${userId}`);
    },
  };
};
