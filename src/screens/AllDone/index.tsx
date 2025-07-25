// External libraries
import { View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

// Interfaces
import { RoutesProps } from '../../interfaces/RoutesProps';

// Assets
import Done from '../../assets/icons/Done';

// Styles
import { layout } from '../../styles/globalStyle';

const AllDone: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RoutesProps>>();

  setTimeout(() => {
    navigation.navigate('Tabs', { initialTab: 'orders' }); //remove the params
  }, 3000);

  return (
    <View style={layout.center}>
      <Done />
    </View>
  );
};

export default AllDone;
