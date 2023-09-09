import { Image, View, Pressable } from 'react-native';
import Badge from './Badge';
import Header from './Header';

const SingleDonationItem = ({
  id,
  image,
  badgeTitle,
  donationTitle,
  price,
  handlePress,
}) => {
  return (
    <Pressable
      style={{
        margin: 5,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#e3e3e3',
      }}
      onPress={() => handlePress(id)}
    >
      <View style={{ width: 155 }}>
        <View style={{ position: 'absolute', zIndex: 1, top: 13, left: 10 }}>
          <Badge title={badgeTitle} />
        </View>

        <Image
          resizeMode='cover'
          source={{ uri: image }}
          style={{
            width: '100%',
            height: 170,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        />

        <View
          style={{
            marginTop: 16,
            gap: 5,
            paddingBottom: 7,
            textAlign: 'center',
            paddingLeft: 5,
          }}
        >
          <Header title={donationTitle} titleStyle='title2' />
          <Header
            title={'$' + Number(price).toFixed(2)}
            titleColor='#156CF7'
            titleStyle='title2'
          />
        </View>
      </View>
    </Pressable>
  );
};

export default SingleDonationItem;
