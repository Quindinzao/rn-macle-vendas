// External libraries
import { ScrollView, View } from 'react-native';

// Components
import Header from '../../components/Header';
import OrderGroup from '../../components/OrderGroup';

// Styles
import { layout } from '../../styles/globalStyle';

const Orders: React.FC = () => {
  const items = Array.from({ length: 10 }, (_, index) => ({
    id: (index + 1).toString(),
    requestDate: new Date().toLocaleDateString(),
    updateDate:
      Math.random() > 0.5
        ? new Date().toLocaleDateString()
        : new Date(
            Date.now() - Math.floor(Math.random() * 10000000000),
          ).toLocaleDateString(),
    status: ['pendente', 'concluído', 'cancelado', 'em andamento'][
      Math.floor(Math.random() * 4)
    ] as 'pendente' | 'concluído' | 'cancelado' | 'em andamento',
  }));

  return (
    <View style={layout.container}>
      <ScrollView>
        <Header title={'Transporte'} />
        <View style={layout.content}>
          <OrderGroup items={items} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Orders;
