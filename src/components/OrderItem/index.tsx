import React from 'react';
import { View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Text from '../Text';
import Next from '../../assets/icons/Next';
import { createStyles } from './styles';
import { useAppTheme } from '../../hooks/useAppTheme';

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
