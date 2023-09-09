import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { Login, Register } from '../Pages';

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Register'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
