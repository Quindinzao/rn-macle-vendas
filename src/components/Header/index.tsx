// External Libraries
import { Image } from 'react-native';
import { Surface, useTheme } from 'react-native-paper';

// Components
import Text from '../Text';
import Button from '../Button';

// Interfaces
import { HeaderProps } from '../../interfaces/HeaderProps';

// Assets
import Logo from '../../assets/icons/Logo';
import Arrow from '../../assets/icons/Arrow';

// Styles
import { createStyles } from './styles';
import { Theme } from '../../styles/theme';

const Header: React.FC<HeaderProps> = ({
  title,
  isBack,
  typeHeader = 'short',
}) => {
  const theme: Theme = useTheme();
  const styles = createStyles(theme, typeHeader);

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
          onPress={() => console.log('Hello World')}
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
