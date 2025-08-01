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

export interface OrderDetailProps {
  orderId: number;
  orderStatus: string;
  orderPaymentMethod: string;
  orderRequestDate: string;
  orderUpdateDate: string;
  orderAddress: string;
  orderTotalPrice: number;
}

export interface OrderDetailModalProps extends OrderDetailProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ParamsProps {
  paymentMethod?: string;
  address?: string;
  onSuccessRedirect?: boolean;
}
