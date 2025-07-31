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

const OrderView: React.FC<OrderViewProps> = ({
  orders,
  loading,
  // fetchOrders,
  titleHeader,
}) => {
  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <OrderItem
          id={item.id}
          requestDate={item.requestDate}
          updateDate={item.requestDate}
          status={item.status}
        />
      )}
      ListHeaderComponent={<Header title={titleHeader} />}
      ListFooterComponent={
        loading ? <ActivityIndicator size={'large'} /> : null
      }
      ListEmptyComponent={
        loading ? (
          <EmptyList message={'Lista vazia. Tente novamente mais tarde.'} />
        ) : null
      }
      // onEndReached={fetchOrders}
      // onEndReachedThreshold={0.1}
      showsVerticalScrollIndicator={false}
      style={layout.flatListContainer}
      contentContainerStyle={layout.flatListContent}
    />
  );
};

export default OrderView;
