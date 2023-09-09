import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './MainNavigation';
import AuthNavigation from './AuthNavigation';
import { useSelector } from 'react-redux';

const RootNavigation = () => {
  const { isLoggedIn } = useSelector((store) => store.user);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigation;
