// External libraries
import { View } from 'react-native';

// Components
import Text from '../Text';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Interfaces
import { EmptyListProps } from '../../interfaces/EmptyList';

// Styles
import { createStyles } from './styles';

const EmptyList: React.FC<EmptyListProps> = ({ message }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <Text type={'titleSmall'}>{message}</Text>
    </View>
  );
};

export default EmptyList;
