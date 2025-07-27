// External Libraries
import { Image } from 'react-native';
import { Surface } from 'react-native-paper';

// Components
import Text from '../Text';
import Button from '../Button';

// Interfaces
import { HeaderProps } from '../../interfaces/HeaderProps';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Assets
import Logo from '../../assets/icons/Logo';
import Arrow from '../../assets/icons/Arrow';

// Styles
import { createStyles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { screenWidth } from '../../utils/dimensions';

const Header: React.FC<HeaderProps> = ({
  title,
  isBack,
  typeHeader = 'short',
}) => {
  const theme = useAppTheme();
  const styles = createStyles(theme, screenWidth, typeHeader);
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (isBack) {
      navigation.goBack();
    }
  };

  return (
    <Surface style={styles.container} elevation={0}>
      <Image
        style={styles.image}
        source={
          typeHeader === 'long'
            ? require('../../assets/png/backgroundHeaderLong.png')
            : require('../../assets/png/backgroundHeaderShort.png')
        }
      />
      {isBack && (
        <Button
          style={styles.back}
          mode={'text'}
          type={'image'}
          onPress={handleBackPress}
        >
          <Arrow height={30} width={30} />
        </Button>
      )}
      <Logo style={styles.logo} height={58.25} width={59.5} />
      <Text type="titleLarge" style={styles.text}>
        {title}
      </Text>
    </Surface>
  );
};

export default Header;
