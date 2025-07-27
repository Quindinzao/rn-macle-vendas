// Services
import { useApi } from './useApi';

interface RegisterPayload {
  username: string;
  password: string;
}

const useUserRequests = () => {
  const { api } = useApi();

  return {
    userAuthentication: async ({ username, password }: RegisterPayload) => {
      const response = await api.post('/users/login', {
        username,
        password,
      });

      return response.data;
    },
    userRegister: async ({ username, password }: RegisterPayload) => {
      return await api.post('/users/register', {
        username,
        password,
      });
    },
  };
};

export default useUserRequests;
