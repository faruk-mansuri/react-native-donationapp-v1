import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Pressable, Text, ActivityIndicator } from 'react-native';
import { style } from '../globalStyles';
import { useState } from 'react';
import { Button, Header, FormRow } from '../Components';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../api/user';
import { useDispatch } from 'react-redux';
import { logIn } from '../features/User/userSlice';

const Login = () => {
  const { navigate } = useNavigation();
  const [formData, setFormData] = useState({
    email: 'peter@gmail.com',
    password: 'Secret123',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const response = await loginUser(formData);
    if (response.status) {
      dispatch(logIn(response.data));
      setError('');
      navigate('Home');
    } else {
      setError(response.error);
    }
    setIsLoading(false);
  };

  return (
    <SafeAreaView style={[style.globalStyle, { flex: 1 }]}>
      <View
        style={{
          marginHorizontal: 24,
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <View style={{ marginBottom: 24 }}>
          <Header title='welcome back' titleStyle='title1' />
        </View>

        <FormRow
          label='Email'
          name='email'
          value={formData.email}
          handleChange={handleChange}
          keyboardType='email-address'
        />
        <FormRow
          label='Password'
          name='password'
          value={formData.password}
          handleChange={handleChange}
          secureText
        />

        {error && (
          <Text
            style={{
              fontFamily: 'PTSans_400Regular',
              fontSize: 16,
              color: 'red',
              textAlign: 'center',
              marginBottom: 10,
              textTransform: 'capitalize',
            }}
          >
            {error}
          </Text>
        )}

        {isLoading ? (
          <ActivityIndicator size='large' color='#428beb' />
        ) : (
          <Button
            isDisabled={formData.email <= 8 || formData.password < 8}
            title='Login'
            handlePress={handleSubmit}
          />
        )}

        <View
          style={{
            marginVertical: 20,
            justifyContent: 'center',
            flexDirection: 'row',
            gap: 7,
          }}
        >
          <Header title='not a member yet?' titleStyle='title3' />
          <Pressable onPress={() => navigate('Register')}>
            <Text style={{ color: '#156CF7' }}>Register</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
