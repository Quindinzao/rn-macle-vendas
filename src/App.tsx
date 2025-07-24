// External libraries
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Components
import Done from './screens/AllDone';

// Styles
import { theme } from './styles/theme';

const App: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <Done />
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
