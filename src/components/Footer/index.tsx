// External libraries
import { View } from 'react-native';

// Components
import Text from '../Text';
import Button from '../Button';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Interfaces
import { FooterProps } from '../../interfaces/FooterProps';

// Utils
import { screenWidth } from '../../utils/helpers/dimensions';

// Styles
import { createStyles } from './styles';
import { layout } from '../../styles/globalStyle';

const Footer: React.FC<FooterProps> = ({ onPress, title, amount }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme, screenWidth);

  return (
    <View style={layout.footer}>
      <View style={styles.container}>
        <View style={styles.textContent}>
          <Text style={styles.text}>Total: </Text>
          <Text type={'titleMedium'}>R${amount}</Text>
        </View>
        <Button onPress={onPress}>{title}</Button>
      </View>
    </View>
  );
};

export default Footer;
