// External libraries
import { NavigationContainer } from '@react-navigation/native';

// Routes
import AppStack from './AppStack';
import AuthStack from './AuthStack';

// Contexts
import { useContextAuth } from '../contexts/AuthContext';

const Routes: React.FC = () => {
  const { authData } = useContextAuth();

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
