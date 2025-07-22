import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { createStyles } from './styles';
import Header from '../../components/Header';
import { Theme } from '../../styles/theme';
import LoginRegisterForm from '../../components/LoginRegisterForm';

const Login: React.FC = () => {
  const theme: Theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Header title={'Entre ou cadastre-se'} typeHeader={'long'} isBack />
      <LoginRegisterForm />
    </View>
  );
};

export default Login;
