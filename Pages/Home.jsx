import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from '../globalStyles';
import highlighted_image from '../assets/highlighted_image.png';

import { Categories, HomeHeader, SingleDonationItem } from '../Components';
import { FlatList, View, Pressable, Image } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { resetCategories } from '../features/Categories/categoriesSlice';
import { resetUserToInitialState } from '../features/User/userSlice';
import {
  resetDonations,
  updateSelectedDonationId,
} from '../features/Donation/donationSlice';

import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const { selectedCategoryId, categoriesData } = useSelector(
    (store) => store.categories
  );
  // const user = useSelector((store) => store.user);
  // console.log('user', user);

  const { items } = useSelector((store) => store.donations);
  const dispatch = useDispatch();
  // dispatch(resetUserToInitialState());
  // dispatch(resetCategories());
  // dispatch(resetDonations());

  const [donationItems, setDonationItems] = useState([]);

  const { navigate } = useNavigation();

  const handleSearch = (value) => {
    console.log(value);
  };

  useEffect(() => {
    const filteredItems = items.filter((item) =>
      item.categoryIds.includes(selectedCategoryId)
    );
    setDonationItems(filteredItems);
  }, [selectedCategoryId]);

  return (
    <SafeAreaView style={[style.globalStyle, { flex: 1 }]}>
      <HomeHeader />

      <Pressable
        style={{
          marginHorizontal: 24,
          height: 160,
          marginTop: 10,
        }}
      >
        <Image
          source={highlighted_image}
          resizeMode='contain'
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Pressable>

      <Categories />

      <View
        style={{
          alignItems: 'center',
          paddingVertical: 10,
          flex: 1,
        }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={donationItems}
          numColumns={2}
          renderItem={({ item }) => {
            const { donationItemId, name, image, price } = item;
            const badgeTitle = categoriesData.filter(
              (category) => category.categoryId === selectedCategoryId
            )[0].name;

            return (
              <SingleDonationItem
                id={donationItemId}
                image={image}
                badgeTitle={badgeTitle}
                price={price}
                donationTitle={name}
                handlePress={(donationId) => {
                  dispatch(updateSelectedDonationId({ donationId }));
                  navigate('SingleDonation', { donationId, badgeTitle });
                }}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
