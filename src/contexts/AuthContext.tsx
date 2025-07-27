/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Hooks
import useAuth from '../hooks/services/useAuth';

// Interfaces
import {
  AuthContextData,
  AuthData,
  AuthProviderProps,
} from '../interfaces/AuthContext';

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

const AUTH_KEY = '@app/auth';

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const { userAuthentication } = useAuth();

  useEffect(() => {
    loadFromStorage();
  }, []);

  const isTokenExpired = (exp: number): boolean => {
    const now = Math.floor(Date.now() / 1000);
    return exp < now;
  };

  const loadFromStorage = async () => {
    const auth = await AsyncStorage.getItem(AUTH_KEY);
    if (auth) {
      const parsedAuth = JSON.parse(auth) as AuthData;

      if (!isTokenExpired(parsedAuth.exp)) {
        setAuthData(parsedAuth);
      } else {
        await AsyncStorage.removeItem(AUTH_KEY); // limpa token expirado
      }
      setAuthData(JSON.parse(auth) as AuthData);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleSignIn = async (username: string, password: string) => {
    setIsLoading(true);
    try {
      const result = await userAuthentication({ username, password });

      if (!result?.token) {
        throw new Error('Invalid response from authentication');
      }

      const auth: AuthData = {
        token: result.token,
        exp: result.exp,
      };

      setAuthData(auth);
      await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(auth));
    } catch (error: any) {
      console.log(':/', 'Failed to sign in.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async (): Promise<void> => {
    setAuthData(undefined);
    await AsyncStorage.removeItem(AUTH_KEY);
  };

  return (
    <AuthContext.Provider
      value={{ authData, handleSignIn, handleSignOut, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useContextAuth = () => {
  return useContext(AuthContext);
};
