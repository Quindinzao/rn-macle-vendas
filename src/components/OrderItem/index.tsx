import React from 'react';
import { View } from 'react-native';
import { TouchableRipple, useTheme } from 'react-native-paper';
import Text from '../Text';
import Next from '../../assets/icons/Next';
import { Theme } from '../../styles/theme';
import { createStyles } from './styles';

const OrderItem: React.FC = () => {
  const theme: Theme = useTheme();
  const styles = createStyles(theme);

  return (
    <TouchableRipple
      onPress={() => console.log('Clicou!')}
      style={styles.container}
      borderless={true}
    >
      <View style={styles.content}>
        <Text type={'titleSmall'} style={styles.mediumSpace}>
          Pedido #12345
        </Text>
        <Text type={'caption'} style={styles.smallSpace}>
          Solicitado no dia 01/01/2023
        </Text>
        <Text type={'caption'} style={styles.mediumSpace}>
          Atualizado no dia 01/01/2023
        </Text>
        <Text type={'caption'}>
          Status: <Text type={'caption'}>Concluído</Text>
        </Text>
        <Next style={styles.next} />
        <View style={styles.line} />
      </View>
    </TouchableRipple>
  );
};

export default OrderItem;
