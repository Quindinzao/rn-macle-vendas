// External libraries
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Contexts
import { AuthProvider } from './contexts/AuthContext';
import { SnackbarProvider } from './contexts/SnackbarContext';
import { CartProvider } from './contexts/CartContext';

// Routes
import Routes from './routes';

// Styles
import { theme } from './styles/theme';

const App: React.FC = () => {
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
