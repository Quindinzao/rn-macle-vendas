import React, { useState, useEffect } from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

const Routes: React.FC = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const checkAuth = async () => {
    const token = await AsyncStorage.getItem('@app/token');
    setIsLogged(!!token);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <NavigationContainer>
      {isLogged ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default Routes;
