// Components
import ModalBase from '../ModalBase';
import OrderDetail from '../OrderDetail';

// Interfaces
import { OrderDetailModalProps } from '../../interfaces/OrderProps';

const ModalOrder: React.FC<OrderDetailModalProps> = ({
  orderId,
  orderStatus,
  orderPaymentMethod,
  orderRequestDate,
  orderUpdateDate,
  orderAddress,
  orderTotalPrice,
  visible,
  setVisible,
}) => (
  <ModalBase title={'Detalhes'} visible={visible} setVisible={setVisible}>
    <OrderDetail
      orderId={orderId}
      orderStatus={orderStatus}
      orderPaymentMethod={orderPaymentMethod}
      orderRequestDate={orderRequestDate}
      orderUpdateDate={orderUpdateDate}
      orderAddress={orderAddress}
      orderTotalPrice={orderTotalPrice}
    />
  </ModalBase>
);

export default ModalOrder;
