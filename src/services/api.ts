import { API_BASE_URL_DESKTOP, API_BASE_URL_MOBILE } from '@env';
import axios from 'axios';
import { isIOS } from '../utils/helpers/platform';

export const api = axios.create({
  baseURL: isIOS ? API_BASE_URL_DESKTOP : API_BASE_URL_MOBILE,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
