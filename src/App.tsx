// External libraries
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect } from 'react';

// Contexts
import { AuthProvider } from './contexts/AuthContext';
import { SnackbarProvider } from './contexts/SnackbarContext';
import { CartProvider } from './contexts/CartContext';

// Database
import { initializeDB } from './database';

// Routes
import Routes from './routes';

// Styles
import { theme } from './styles/theme';

const App: React.FC = () => {
  useEffect(() => {
    initializeDB();
  }, []);
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <CartProvider>
          <SnackbarProvider>
            <SafeAreaProvider>
              <Routes />
            </SafeAreaProvider>
          </SnackbarProvider>
        </CartProvider>
      </AuthProvider>
    </PaperProvider>
  );
};

export default App;
