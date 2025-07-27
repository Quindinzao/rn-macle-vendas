// External libraries
import { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setupInterceptors = (
  api: any,
  showSnackbar: (msg: string) => void,
) => {
  if ((api as any)._interceptorsConfigured) return;
  (api as any)._interceptorsConfigured = true;

  api.interceptors.request.use(
    async (config: { headers: { Authorization: string } }) => {
      const token = await AsyncStorage.getItem('token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: any) => {
      showSnackbar('Erro ao preparar requisição.');
      return Promise.reject(error);
    },
  );

  api.interceptors.response.use(
    (response: any) => response,
    async (error: AxiosError) => {
      if (error.response) {
        const status = error.response.status;
        switch (status) {
          case 401:
            showSnackbar('Sessão expirada. Faça login novamente.');
            break;
          case 403:
            showSnackbar('Acesso negado.');
            break;
          case 404:
            showSnackbar('Recurso não encontrado.');
            break;
          case 500:
          case 502:
          case 503:
            showSnackbar('Erro no servidor. Tente mais tarde.');
            break;
          default:
            showSnackbar(`Erro inesperado: ${status}`);
        }
      } else if (error.request) {
        console.log(error);
        showSnackbar('Sem resposta do servidor. Verifique sua conexão.');
      } else {
        showSnackbar(`Erro desconhecido: ${error.message}`);
      }

      return Promise.reject(error);
    },
  );
};
