// External libraries
import { FlatList, ActivityIndicator } from 'react-native';

// Components
import Header from '../Header';
import OrderItem from '../OrderItem';
import EmptyList from '../EmptyList';

// Interfaces
import { OrderViewProps } from '../../interfaces/OrderProps';

// Styles
import { layout } from '../../styles/globalStyle';
import { useState } from 'react';

const OrderView: React.FC<OrderViewProps> = ({
  orders,
  loading,
  titleHeader,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => {
        const formattedRequestDate = new Date(
          item.createdAt,
        ).toLocaleDateString('pt-BR');
        const formattedUpdatedDate = new Date(
          item.updatedAt,
        ).toLocaleDateString('pt-BR');
        return (
          <OrderItem
            orderId={item.id}
            orderStatus={item.status}
            orderPaymentMethod={item.paymentMethod}
            orderRequestDate={formattedRequestDate}
            orderUpdateDate={formattedUpdatedDate}
            orderAddress={item.address}
            orderTotalPrice={item.totalPrice}
            visible={visible}
            setVisible={setVisible}
          />
        );
      }}
      ListHeaderComponent={<Header title={titleHeader} />}
      ListFooterComponent={
        loading ? <ActivityIndicator size={'large'} /> : null
      }
      ListEmptyComponent={
        loading ? (
          <EmptyList message={'Lista vazia. Tente novamente mais tarde.'} />
        ) : null
      }
      showsVerticalScrollIndicator={false}
      style={layout.flatListContainer}
      contentContainerStyle={layout.flatListContent}
    />
  );
};

export default OrderView;
