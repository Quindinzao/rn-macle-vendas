// Components
import OrderView from '../../components/OrderView';

// Constants
import { useOrderController } from '../../hooks/common/useOrderController';

const Order: React.FC = () => {
  const { orders, loading } = useOrderController();

  return (
    <OrderView
      titleHeader={'Pedidos'}
      orders={orders.reverse()}
      loading={loading}
    />
  );
};

export default Order;
