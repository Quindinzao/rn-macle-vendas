// External libraries
import { useEffect, useMemo } from 'react';

// Contexts
import { useSnackbar } from '../../contexts/SnackbarContext';

// Services
import { api } from '../../services/api';
import { setupInterceptors } from '../../services/apiInterceptors';

export const useApi = () => {
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    setupInterceptors(api, showSnackbar);
  }, [showSnackbar]);

  return useMemo(() => ({ api }), []);
};
