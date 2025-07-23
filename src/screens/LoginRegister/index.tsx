// External libraries
import { View } from 'react-native';

// Components
import Header from '../../components/Header';
import LoginRegisterForm from '../../components/LoginRegisterForm';

// Styles
import { layout } from '../../styles/globalStyle';

const LoginRegister: React.FC = () => {
  return (
    <View style={layout.container}>
      <Header title={'Entre ou cadastre-se'} typeHeader={'long'} />
      <LoginRegisterForm />
    </View>
  );
};

export default LoginRegister;
