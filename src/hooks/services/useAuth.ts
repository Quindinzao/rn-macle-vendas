// Services
import { useApi } from './useApi';

interface RegisterPayload {
  username: string;
  password: string;
}

const useAuth = () => {
  const { api } = useApi();

  return {
    userAuthentication: async ({ username, password }: RegisterPayload) => {
      const response = await api.post('/users/login', {
        username,
        password,
      });

      return response.data;
    },
  };
};

export default useAuth;
