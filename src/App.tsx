// External libraries
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Components
import Home from './screens/Home';

// Styles
import { theme } from './styles/theme';

const App: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
