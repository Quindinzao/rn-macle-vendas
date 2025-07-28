// External libraries
import { useCallback, useState } from 'react';
import { View } from 'react-native';

// Components
import Button from '../../components/Button';
import TextField from '../../components/TextField';

// Contexts
import { useAuth } from '../../contexts/AuthContext';

// Services
import useUserRequests from '../../hooks/services/useUserRequests';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Styles
import { createStyles } from './styles';

const LoginRegisterForm: React.FC = () => {
  const { handleSignIn } = useAuth();
  const { userRegister } = useUserRequests();

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({ username: '', password: '' });

  const theme = useAppTheme();
  const styles = createStyles(theme);

  const handleInputChange = useCallback(
    (field: 'username' | 'password', value: string) => {
      setCredentials(prev => ({ ...prev, [field]: value }));
      setErrors(prev => ({ ...prev, [field]: '' }));
    },
    [],
  );

  const validateForm = useCallback(() => {
    const { username, password } = credentials;

    const newErrors = {
      username: username.trim() ? '' : 'Usuário é obrigatório.',
      password: password.trim() ? '' : 'Senha é obrigatória.',
    };

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  }, [credentials]);

  const handleLogin = useCallback(() => {
    if (!validateForm()) return;
    handleSignIn(credentials.username, credentials.password);
  }, [credentials, validateForm, handleSignIn]);

  const handleRegister = useCallback(() => {
    if (!validateForm()) return;
    userRegister({ ...credentials });
  }, [credentials, validateForm, userRegister]);

  return (
    <View style={styles.container}>
      <TextField
        label="Usuário"
        value={credentials.username}
        onChangeText={value => handleInputChange('username', value)}
        error={!!errors.username}
        errorMessage={errors.username}
      />
      <TextField
        label="Senha"
        value={credentials.password}
        onChangeText={value => handleInputChange('password', value)}
        secureTextEntry
        error={!!errors.password}
        errorMessage={errors.password}
      />

      <Button mode="contained" onPress={handleLogin}>
        Entrar
      </Button>
      <Button mode="text" onPress={handleRegister}>
        Cadastrar
      </Button>
    </View>
  );
};

export default LoginRegisterForm;
