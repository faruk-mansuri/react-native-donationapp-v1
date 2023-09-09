import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { Home, SingleDonation } from '../Pages';

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='SingleDonation' component={SingleDonation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
