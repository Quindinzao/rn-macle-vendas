// External libraries
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Components
import LoginRegister from './screens/LoginRegister';

// Styles
import { theme } from './styles/theme';

const App: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <LoginRegister />
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
