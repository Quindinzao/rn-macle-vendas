/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import { useEffect } from 'react';

// Contexts
import { useSnackbar } from '../../contexts/SnackbarContext';

// Services
import { api } from '../../services/api';
import { setupInterceptors } from '../../services/apiInterceptors';

export const useApi = () => {
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    setupInterceptors(api, showSnackbar);
  }, []);

  return { api };
};
