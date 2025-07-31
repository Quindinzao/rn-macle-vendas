// External libraries
import { View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

// Components
import Text from '../Text';
import ModalOrder from '../ModalOrder';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Interfaces
import { OrderDetailModalProps } from '../../interfaces/OrderProps';

// Assets
import Next from '../../assets/icons/Next';

// Styles
import { createStyles } from './styles';

const OrderItem: React.FC<OrderDetailModalProps> = ({
  orderId,
  orderStatus,
  orderPaymentMethod,
  orderRequestDate,
  orderUpdateDate,
  orderAddress,
  orderTotalPrice,
  visible,
  setVisible,
}) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <>
      <TouchableRipple
        onPress={() => setVisible(true)}
        style={styles.container}
        borderless={true}
      >
        <View style={styles.content}>
          <Text type={'titleSmall'} style={styles.mediumSpace}>
            Pedido #{orderId}
          </Text>
          <Text type={'caption'} style={styles.smallSpace}>
            Solicitado no dia {orderRequestDate}
          </Text>
          <Text type={'caption'} style={styles.mediumSpace}>
            Atualizado no dia {orderUpdateDate}
          </Text>
          <Text type={'caption'}>
            Status: <Text type={'caption'}>{orderStatus}</Text>
          </Text>
          <Next style={styles.next} />
          <View style={styles.line} />
        </View>
      </TouchableRipple>
      <ModalOrder
        orderId={orderId}
        orderStatus={orderStatus}
        orderPaymentMethod={orderPaymentMethod}
        orderRequestDate={orderRequestDate}
        orderUpdateDate={orderUpdateDate}
        orderAddress={orderAddress}
        orderTotalPrice={orderTotalPrice}
        visible={visible}
        setVisible={setVisible}
      />
    </>
  );
};

export default OrderItem;
