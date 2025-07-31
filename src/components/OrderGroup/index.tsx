// Components
import OrderItem from '../OrderItem';

// Interfaces
import { OrderGroupProps } from '../../interfaces/OrderProps';

const OrderGroup: React.FC<OrderGroupProps> = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <OrderItem
          key={item.id}
          id={item.id}
          requestDate={item.requestDate}
          updateDate={item.requestDate}
          status={item.status}
        />
      ))}
    </>
  );
};

export default OrderGroup;
