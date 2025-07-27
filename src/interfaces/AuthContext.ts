import { ReactNode } from 'react';

export interface AuthData {
  token: string;
  exp: number;
}

export interface AuthContextData {
  authData?: AuthData;
  handleSignIn: (username: string, password: string) => Promise<void>;
  handleSignOut: () => Promise<void>;
  isLoading: boolean;
}

export interface AuthProviderProps {
  children?: ReactNode;
}
