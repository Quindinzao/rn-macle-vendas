// External Libraries
import { Alert, Image } from 'react-native';
import { Surface } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// Components
import Text from '../Text';
import Button from '../Button';

// Interfaces
import { HeaderProps } from '../../interfaces/HeaderProps';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';
import { useAuth } from '../../contexts/AuthContext';

// Utils
import { screenWidth } from '../../utils/helpers/dimensions';

// Assets
import Logo from '../../assets/icons/Logo';
import Arrow from '../../assets/icons/Arrow';
import Logout from '../../assets/icons/Logout';

// Styles
import { createStyles } from './styles';

const Header: React.FC<HeaderProps> = ({
  title,
  isBack = false,
  typeHeader = 'short',
}) => {
  const theme = useAppTheme();
  const styles = createStyles(theme, screenWidth, typeHeader);
  const navigation = useNavigation();
  const { handleSignOut } = useAuth();

  const confirmLogout = () => {
    Alert.alert(
      'Tem certeza de que deseja sair?',
      'Essa ação irá desconectar você da aplicação.',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: handleSignOut },
      ],
      { cancelable: true },
    );
  };

  const renderBackButton = () => (
    <Button
      style={styles.back}
      mode={'text'}
      type={'image'}
      onPress={navigation.goBack}
    >
      <Arrow height={30} width={30} />
    </Button>
  );

  const renderLogoutButton = () => (
    <Button
      style={styles.signOut}
      mode={'text'}
      type={'image'}
      onPress={confirmLogout}
    >
      <Logout height={30} width={30} />
    </Button>
  );

  const backgroundImage =
    typeHeader === 'long'
      ? require('../../assets/png/backgroundHeaderLong.png')
      : require('../../assets/png/backgroundHeaderShort.png');

  return (
    <Surface style={styles.container} elevation={0}>
      <Image style={styles.image} source={backgroundImage} />
      {isBack
        ? renderBackButton()
        : typeHeader === 'short' && renderLogoutButton()}
      <Logo style={styles.logo} height={58.25} width={59.5} />
      <Text type={'titleLarge'} style={styles.text}>
        {title}
      </Text>
    </Surface>
  );
};

export default Header;
