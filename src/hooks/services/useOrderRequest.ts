// Services
import { deleteAllOrder } from '../../database/cart';
import { useApi } from './useApi';

const useOrderRequests = () => {
  const { api } = useApi();

  return {
    orderAll: async (
      userId: number,
      products: { productId: number; quantity: number }[],
      paymentMethod: string,
      address?: string,
    ) => {
      const payload: any = {
        items: products,
        status: 'pendente',
        paymentMethod,
      };

      if (address) {
        payload.address = address;
      }

      try {
        const response = await api.post(`/orders/user/${userId}`, payload);
        await deleteAllOrder();

        return response.data;
      } catch (error) {
        throw error;
      }
    },
    productById: async (userId: number) => {
      return await api.get(`/order/user/${userId}`);
    },
  };
};

export default useOrderRequests;
