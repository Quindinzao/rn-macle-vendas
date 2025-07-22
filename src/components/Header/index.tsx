// External Libraries
import { Image } from 'react-native';
import { Surface, useTheme } from 'react-native-paper';

// Components
import Text from '../Text';
import Button from '../Button';

// Assets
import Logo from '../../assets/icons/Logo';
import Arrow from '../../assets/icons/Arrow';

// Styles
import { createStyles } from './styles';
import { Theme } from '../../styles/theme';

interface HeaderProps {
  title: string;
  isBack?: boolean;
  typeHeader: 'long' | 'short';
}

const Header: React.FC<HeaderProps> = ({ title, isBack, typeHeader }) => {
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
          <Arrow />
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
