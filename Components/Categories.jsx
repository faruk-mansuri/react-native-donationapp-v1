import { useSelector } from 'react-redux';
import { View, FlatList, Text } from 'react-native';
import SingleCategory from './SingleCategory';
import Header from './Header';
import { useState } from 'react';

const Categories = () => {
  const { categoriesData, selectedCategoryId } = useSelector(
    (store) => store.categories
  );

  // pagination for categories
  const categoryLimit = 4;
  const [category, setCategory] = useState(
    categoriesData.slice(0, categoryLimit)
  );
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const pagination = (nextPage) => {
    let firstPage = (nextPage - 1) * categoryLimit;
    if (firstPage > categoriesData.length) return [];
    setPage(nextPage);
    return categoriesData.slice(firstPage, firstPage + categoryLimit);
  };

  return (
    <View style={{ marginLeft: 24, marginTop: 10 }}>
      <View style={{ marginBottom: 10 }}>
        <Header title='Selected Category' titleStyle='title2' />
      </View>

      <FlatList
        onEndReachedThreshold={0.8}
        onEndReached={() => {
          if (!isLoading && category.length < categoriesData.length) {
            setIsLoading(true);
            setCategory((category) => [...category, ...pagination(page + 1)]);
            setIsLoading(false);
          }
        }}
        showsHorizontalScrollIndicator={false}
        data={category}
        keyExtractor={(item) => item.categoryId} // always use keyExtractor if item don't has id or key
        renderItem={({ item }) => (
          <SingleCategory {...item} selectedCategoryId={selectedCategoryId} />
        )}
        horizontal={true}
      />
    </View>
  );
};

export default Categories;
