// Components
import ModalBase from '../ModalBase';
import OrderDetail from '../OrderDetail';

// Interfaces
import { ModalOrderDetailProps } from '../../interfaces/ModalProps';

const ModalOrder: React.FC<ModalOrderDetailProps> = ({
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
