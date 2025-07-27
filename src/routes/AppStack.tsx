// External libraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Delivery from '../screens/Delivery';
import Address from '../screens/Address';
import PaymentMethod from '../screens/PaymentMethod';
import Card from '../screens/Card';
import AllDone from '../screens/AllDone';

// Routes
import BottomTabs from './BottomTabs';

// Interfaces
import { RoutesProps } from '../interfaces/RoutesProps';

const { Navigator, Screen } = createNativeStackNavigator<RoutesProps>();

const AppStack: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={'Tabs'} component={BottomTabs} />
      <Screen name={'Delivery'} component={Delivery} />
      <Screen name={'Address'} component={Address} />
      <Screen name={'PaymentMethod'} component={PaymentMethod} />
      <Screen name={'Card'} component={Card} />
      <Screen name={'AllDone'} component={AllDone} />
    </Navigator>
  );
};

export default AppStack;
