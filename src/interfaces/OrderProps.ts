export interface OrderViewProps {
  orders: any[];
  loading: boolean;
  // fetchOrders: () => void;
  titleHeader: string;
}

export interface OrderItemProps {
  id: string;
  requestDate: string;
  updateDate?: string;
  status: 'pendente' | 'concluído' | 'cancelado' | 'em andamento';
}

export interface OrderGroupProps {
  items: {
    id: string;
    updateDate?: string;
    requestDate: string;
    status: 'pendente' | 'concluído' | 'cancelado' | 'em andamento';
  }[];
}
