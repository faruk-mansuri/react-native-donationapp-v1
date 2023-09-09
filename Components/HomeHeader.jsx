import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Image, Pressable } from 'react-native';
import Header from './Header';
import SearchComponent from './SearchComponent';
import { resetUserToInitialState } from '../features/User/userSlice';
import { logoutUser } from '../api/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { fullName, profileImg } = useSelector((state) => state.user);

  const logout = async () => {
    await logoutUser();
    dispatch(resetUserToInitialState());
    navigation.navigate('Login');
  };

  return (
    <View>
      <View
        style={{
          marginVertical: 20,
          marginHorizontal: 24,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: 'PTSans_400Regular',
              fontSize: 16,
              fontWeight: '400',
              color: '#636776',
            }}
          >
            Hello,
          </Text>

          <Header title={`${fullName} 👋`} titleStyle='title1' />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image
            source={profileImg}
            resizeMode='cover'
            style={{ width: 60, height: 60, borderRadius: 50 }}
          />
          <Pressable style onPress={logout}>
            <Header title='logout' titleStyle='title3' titleColor='#156CF7' />
          </Pressable>
        </View>
      </View>

      <SearchComponent onSearch={() => console.log('search')} />
    </View>
  );
};

export default HomeHeader;
