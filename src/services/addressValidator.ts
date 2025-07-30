import axios from 'axios';
import { API_KEY_OPEN_CAGE } from '@env';

export const addressValidator = async (address: string) => {
  try {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        address,
      )}&key=${API_KEY_OPEN_CAGE}`,
    );

    const data = response.data;

    if (data.results.length > 0) {
      return {
        isValid: true,
        formatted: data.results[0].formatted,
        coordinates: data.results[0].geometry,
      };
    } else {
      return { isValid: false };
    }
  } catch (error) {
    console.error('Erro na validação de endereço:', error);
    return { isValid: false };
  }
};
