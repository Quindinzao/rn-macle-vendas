// External libraries
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { NavigationContainer } from '@react-navigation/native';

// Routes
import Routes from './routes';

// Styles
import { theme } from './styles/theme';

const App: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
