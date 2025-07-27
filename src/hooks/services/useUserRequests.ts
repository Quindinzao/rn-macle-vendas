// Services
import { useApi } from './useApi';

interface RegisterPayload {
  username: string;
  password: string;
}

const useUserRequests = () => {
  const { api } = useApi();

  return {
    userRegister: async ({ username, password }: RegisterPayload) => {
      return await api.post('/users/register', {
        username,
        password,
      });
    },
  };
};

export default useUserRequests;
