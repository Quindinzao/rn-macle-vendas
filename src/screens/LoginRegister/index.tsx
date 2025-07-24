// External libraries
import { ScrollView, View } from 'react-native';

// Components
import Header from '../../components/Header';
import LoginRegisterForm from '../../components/LoginRegisterForm';

// Styles
import { layout } from '../../styles/globalStyle';

const LoginRegister: React.FC = () => {
  return (
    <ScrollView style={layout.container}>
      <Header title={'Entre ou cadastre-se'} typeHeader={'long'} />
      <View style={layout.content}>
        <LoginRegisterForm />
      </View>
    </ScrollView>
  );
};

export default LoginRegister;
