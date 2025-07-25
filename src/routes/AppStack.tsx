import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import Delivery from '../screens/Delivery';
import { RoutesProps } from '../interfaces/RoutesProps';
import Address from '../screens/Address';
import PaymentMethod from '../screens/PaymentMethod';
import Card from '../screens/Card';
import AllDone from '../screens/AllDone';

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
