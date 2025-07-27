// External libraries
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { BottomNavigation } from 'react-native-paper';

// Screens
import Home from '../screens/Home';
import Orders from '../screens/Orders';
import ShoppingCart from '../screens/ShoppingCart';

// Hooks
import { useAppTheme } from '../hooks/common/useAppTheme';

// Assets
import HomeActive from '../assets/icons/HomeActive';
import HomeInactive from '../assets/icons/HomeInactive';
import ShoppingCartActive from '../assets/icons/ShoppingCartActive';
import ShoppingCartInactive from '../assets/icons/ShoppingCartInactive';
import HistoryActive from '../assets/icons/HistoryActive';
import HistoryInactive from '../assets/icons/HistoryInactive';

// Styles
import { Theme } from '../styles/theme';

const HomeRoute = () => <Home />;
const ShoppingCartRoute = () => <ShoppingCart />;
const OrdersRoute = () => <Orders />;

const BottomTabs: React.FC = () => {
  const routeItem = useRoute();
  const theme = useAppTheme();
  const styles = createStyle(theme);

  const [index, setIndex] = useState(() => {
    const initialTab = (routeItem.params as any)?.initialTab;
    switch (initialTab) {
      case 'shoppingCart':
        return 1;
      case 'orders':
        return 2;
      case 'home':
      default:
        return 0;
    }
  });

  const routes = [{ key: 'home' }, { key: 'shoppingCart' }, { key: 'orders' }];

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    shoppingCart: ShoppingCartRoute,
    orders: OrdersRoute,
  });

  const renderIcon = ({ route, focused }: any) => {
    switch (route.key) {
      case 'home':
        return focused ? <HomeActive /> : <HomeInactive />;
      case 'shoppingCart':
        return focused ? <ShoppingCartActive /> : <ShoppingCartInactive />;
      case 'orders':
        return focused ? <HistoryActive /> : <HistoryInactive />;
      default:
        return null;
    }
  };

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={renderIcon}
      shifting={false}
      labeled={true}
      activeColor={'red'}
      sceneAnimationEnabled={false}
      activeIndicatorStyle={styles.activeIndicator}
      barStyle={styles.bar}
    />
  );
};

const createStyle = (theme: Theme) =>
  StyleSheet.create({
    bar: {
      backgroundColor: theme.colors.blue_900,
      height: 60,
    },
    activeIndicator: {
      backgroundColor: theme.colors.blue_900,
    },
  });

export default BottomTabs;
