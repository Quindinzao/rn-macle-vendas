// External libraries
import { useState } from 'react';
import { View } from 'react-native';

// Components
import Button from '../../components/Button';
import TextField from '../../components/TextField';

// Contexts
import { useContextAuth } from '../../contexts/AuthContext';

// Services
import useUserRequests from '../../hooks/services/useUserRequests';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Styles
import { createStyles } from './styles';

const LoginRegisterForm: React.FC = () => {
  const { handleSignIn } = useContextAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const theme = useAppTheme();
  const styles = createStyles(theme);

  const { userRegister } = useUserRequests();

  const validate = () => {
    const newErrors = {
      username: username.trim() === '' ? 'Usuário é obrigatório.' : '',
      password: password.trim() === '' ? 'Senha é obrigatória.' : '',
    };

    setErrors(newErrors);
    return Object.values(newErrors).every(msg => msg === '');
  };

  const handleLogin = () => {
    if (validate()) {
      handleSignIn(username, password);
      console.log('Login realizado com:', { username, password });
    }
  };

  const handleRegister = () => {
    if (validate()) {
      userRegister({ username, password });
    }
  };

  return (
    <View style={styles.container}>
      <TextField
        label={'Usuário'}
        value={username}
        onChangeText={setUsername}
        error={!!errors.username}
        errorMessage={errors.username}
      />
      <TextField
        label={'Senha'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        error={!!errors.password}
        errorMessage={errors.password}
      />
      <Button mode={'contained'} onPress={handleLogin}>
        Entrar
      </Button>
      <Button mode={'text'} onPress={handleRegister}>
        Cadastrar
      </Button>
    </View>
  );
};

export default LoginRegisterForm;
