/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { Modal, Portal } from 'react-native-paper';

// Components
import HeaderModal from '../HeaderModal';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Interfaces
import { ModalBaseProps } from '../../interfaces/ModalProps';

// Utils
import { isIOS } from '../../utils/helpers/platform';
import { screenHeight, screenWidth } from '../../utils/helpers/dimensions';

// Styles
import { createStyles } from './styles';

const ModalBase: React.FC<ModalBaseProps> = ({
  visible,
  setVisible,
  children,
  title,
}) => {
  const theme = useAppTheme();
  const styles = createStyles(theme, isIOS, screenWidth);

  const translateY = useRef(new Animated.Value(screenHeight)).current;

  const hideModal = () => setVisible(false);

  useEffect(() => {
    if (visible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: screenHeight,
        duration: 300,
        useNativeDriver: true,
      }).start(() => translateY.setValue(screenHeight));
    }
  }, [visible]);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.fullScreenModal}
      >
        <Animated.View
          style={[styles.innerContent, { transform: [{ translateY }] }]}
        >
          <HeaderModal title={title} onClose={hideModal} />
          {children}
        </Animated.View>
      </Modal>
    </Portal>
  );
};

export default ModalBase;
