import { View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import Text from '../Text';
import { createStyles } from './styles';
import { isIOS } from '../../utils/platform';
import { screenWidth } from '../../utils/dimensions';
import { useAppTheme } from '../../hooks/useAppTheme';
import HeaderModal from '../HeaderModal';

interface ModalBaseProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalBase: React.FC<ModalBaseProps> = ({ visible, setVisible }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme, isIOS, screenWidth);
  const hideModal = () => setVisible(false);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.fullScreenModal}
      >
        <View style={styles.innerContent}>
          <HeaderModal title={'Hello World'} onClose={hideModal} />
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </View>
      </Modal>
    </Portal>
  );
};

export default ModalBase;
