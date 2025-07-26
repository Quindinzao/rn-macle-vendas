// External libraries
import { useState } from 'react';
import { View } from 'react-native';

// Components
import Button from '../../components/Button';
import TextField from '../../components/TextField';

// Styles
import { createStyles } from './styles';
import { useAppTheme } from '../../hooks/useAppTheme';

const LoginRegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const theme = useAppTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <TextField
        label={'Usuário'}
        value={username}
        onChangeText={event => setUsername(event)}
      />
      <TextField
        label={'Senha'}
        value={password}
        secureTextEntry
        onChangeText={event => setPassword(event)}
      />
      <Button mode={'contained'} onPress={() => console.warn('Hello World')}>
        Entrar
      </Button>
      <Button mode={'text'} onPress={() => console.warn('Hello World')}>
        Cadastrar
      </Button>
    </View>
  );
};

export default LoginRegisterForm;
