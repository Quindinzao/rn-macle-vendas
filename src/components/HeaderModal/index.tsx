// External Libraries
import { Surface } from 'react-native-paper';

// Components
import Text from '../Text';
import Button from '../Button';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Utils
import { isIOS } from '../../utils/helpers/platform';

// Assets
import CloseModal from '../../assets/icons/CloseModal';

// Styles
import { createStyles } from './styles';

interface HeaderModalProps {
  title: string;
  onClose: () => void;
}

const HeaderModal: React.FC<HeaderModalProps> = ({ title, onClose }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme, isIOS);

  return (
    <Surface style={styles.container} elevation={0}>
      <Button
        style={styles.close}
        mode={'text'}
        type={'image'}
        onPress={onClose}
      >
        <CloseModal height={30} width={30} />
      </Button>
      <Text type="titleSmall">{title}</Text>
    </Surface>
  );
};

export default HeaderModal;
