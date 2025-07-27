// External libraries
import { View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

// Components
import Text from '../Text';
import Next from '../../assets/icons/Next';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Styles
import { createStyles } from './styles';

interface OrderItemProps {
  id: string;
  requestDate: string;
  updateDate?: string;
  status: 'pendente' | 'concluído' | 'cancelado' | 'em andamento';
}

const OrderItem: React.FC<OrderItemProps> = ({
  id,
  requestDate,
  updateDate = requestDate,
  status,
}) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  return (
    <TouchableRipple
      onPress={() => console.log('Clicou!')}
      style={styles.container}
      borderless={true}
    >
      <View style={styles.content}>
        <Text type={'titleSmall'} style={styles.mediumSpace}>
          Pedido #{id}
        </Text>
        <Text type={'caption'} style={styles.smallSpace}>
          Solicitado no dia {requestDate}
        </Text>
        <Text type={'caption'} style={styles.mediumSpace}>
          Atualizado no dia {updateDate}
        </Text>
        <Text type={'caption'}>
          Status: <Text type={'caption'}>{status}</Text>
        </Text>
        <Next style={styles.next} />
        <View style={styles.line} />
      </View>
    </TouchableRipple>
  );
};

export default OrderItem;
