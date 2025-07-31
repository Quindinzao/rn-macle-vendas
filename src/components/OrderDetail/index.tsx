// External libraries
import { View } from 'react-native';

// Components
import Text from '../Text';

// Interfaces
import { OrderDetailProps } from '../../interfaces/OrderProps';

// Styles
import { layout } from '../../styles/globalStyle';
// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';
import { createStyle } from './styles';

const OrderDetail: React.FC<OrderDetailProps> = ({
  orderId,
  orderStatus,
  orderPaymentMethod,
  orderRequestDate,
  orderUpdateDate,
  orderAddress,
  orderTotalPrice,
}) => {
  const theme = useAppTheme();
  const styles = createStyle(theme);

  return (
    <View>
      <Text type={'titleSmall'} style={styles.title}>
        Pedido #{orderId}
      </Text>
      <View style={layout.row}>
        <Text style={styles.text}>Status:</Text>
        <Text style={[styles.text, styles.right]}>{orderStatus}</Text>
      </View>
      {orderPaymentMethod && (
        <View style={layout.row}>
          <Text style={styles.text}>Método de pagamento:</Text>
          <Text style={[styles.text, styles.right]}>{orderPaymentMethod}</Text>
        </View>
      )}
      <View style={layout.row}>
        <Text style={styles.text}>Solicitado no dia:</Text>
        <Text style={[styles.text, styles.right]}>{orderRequestDate}</Text>
      </View>
      <View style={layout.row}>
        <Text style={styles.text}>Atualizado dia:</Text>
        <Text style={[styles.text, styles.right]}>{orderUpdateDate}</Text>
      </View>
      {orderAddress && (
        <View style={layout.row}>
          <Text style={styles.text}>Endereço:</Text>
          <Text style={[styles.text, styles.right]}>{orderAddress}</Text>
        </View>
      )}
      <Text type={'titleSmall'} style={[styles.price, styles.right]}>
        R$ {orderTotalPrice}
      </Text>
    </View>
  );
};

export default OrderDetail;
