// Services
import { useApi } from './useApi';

const useOrderRequests = () => {
  const { api } = useApi();

  return {
    productAll: async (limit?: number, offset?: number) => {
      const response = await api.get('/products', {
        params: { limit, offset },
      });
      return response.data;
    },
    productById: async (id: number) => {
      return await api.get(`/products/product/${id}`);
    },
  };
};

export default useOrderRequests;
