import OrderItem from '../OrderItem';

interface OrderGroupProps {
  items: {
    id: string;
    updateDate?: string;
    requestDate: string;
    status: 'pendente' | 'concluído' | 'cancelado' | 'em andamento';
  }[];
}

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
