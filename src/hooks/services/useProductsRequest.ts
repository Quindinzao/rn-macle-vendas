// Services
import { useApi } from './useApi';

const useProductsRequests = () => {
  const { api } = useApi();

  return {
    productAll: async () => {
      return await api.get('/products');
    },
    productById: async (id: number) => {
      return await api.get(`/products/product/${id}`);
    },
  };
};

export default useProductsRequests;
