// External libraries
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';

// Routes
import AppStack from './AppStack';
import AuthStack from './AuthStack';

// Contexts
import { useAuth } from '../contexts/AuthContext';

const Routes: React.FC = () => {
  const { authData, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      BootSplash.hide({ fade: true });
    }
  }, [isLoading]);

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
