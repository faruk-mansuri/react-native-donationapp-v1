import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { BackButton, Badge, Button, Header } from '../Components';
import { style } from '../globalStyles';

const SingleDonation = () => {
  const route = useRoute();
  const { navigate } = useNavigation();
  const { donationId, badgeTitle } = route.params;
  const { items } = useSelector((store) => store.donations);

  const donationItem = items.find(
    (items) => items.donationItemId === donationId
  );

  const { image, description, name } = donationItem;

  const onPress = () => navigate('Home');

  return (
    <SafeAreaView style={[style.globalStyle, { flex: 1 }]}>
      <ScrollView
        style={{ marginHorizontal: 20, flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <BackButton onPress={onPress} />
        <Image
          source={{ uri: image }}
          style={{ marginTop: 10, width: '100%', height: 240, borderRadius: 5 }}
        />

        <View style={{ marginVertical: 15 }}>
          <Badge title={badgeTitle} />
        </View>

        <Header title={name} titleStyle='title1' />
        <Text
          style={{
            marginTop: 10,
            fontFamily: 'PTSans_400Regular_Italic',
            fontWeight: '400',
            fontSize: 16,
          }}
        >
          {description}
        </Text>
      </ScrollView>

      <View style={{ margin: 20 }}>
        <Button title='donate' />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonation;
