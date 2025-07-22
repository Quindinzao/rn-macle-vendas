// External libraries
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';

// Components
import Header from '../../components/Header';
import LoginRegisterForm from '../../components/LoginRegisterForm';

// Styles
import { createStyles } from './styles';
import { Theme } from '../../styles/theme';

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
