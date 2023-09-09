import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Pressable,
  Text,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import { style } from '../globalStyles';
import { useState } from 'react';
import { Button, FormRow, Header } from '../Components';
import { useNavigation } from '@react-navigation/native';

import { createUser } from '../api/user';

const Register = () => {
  const { navigate } = useNavigation();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const response = await createUser({ ...formData });
    if (response.error) {
      setError(response.error);
    } else {
      setError('');
      setSuccess('You have successfully registered');
      setTimeout(() => {
        navigate('Login');
        setSuccess('');
        setFormData({
          fullName: '',
          email: '',
          password: '',
        });
      }, 1000);
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
          <Header title='Hello and welcome !' titleStyle='title1' />
        </View>

        <FormRow
          label='Full Name'
          name='fullName'
          value={formData.fullName}
          handleChange={handleChange}
        />

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
        {success && (
          <Text
            style={{
              fontFamily: 'PTSans_400Regular',
              fontSize: 16,
              color: 'green',
              textAlign: 'center',
              marginBottom: 10,
              textTransform: 'capitalize',
            }}
          >
            {success}
          </Text>
        )}

        {isLoading ? (
          <ActivityIndicator size='large' color='#428beb' />
        ) : (
          <Button
            isDisabled={
              formData.fullName.length <= 2 ||
              formData.email <= 8 ||
              formData.password < 8
            }
            title='Register'
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
          <Header title='already a member?' titleStyle='title3' />
          <Pressable onPress={() => navigate('Login')}>
            <Text style={{ color: '#156CF7' }}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
