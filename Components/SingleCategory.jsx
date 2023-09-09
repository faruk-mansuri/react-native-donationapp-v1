import { Text, View } from 'react-native';
import Tab from './Tab';
import { useDispatch } from 'react-redux';
import { updateSelectedCategoryId } from '../features/Categories/categoriesSlice';

const SingleCategory = ({ categoryId, name, selectedCategoryId }) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(updateSelectedCategoryId({ categoryId }));
  };

  return (
    <View style={{ marginRight: 10 }}>
      <Tab
        title={name}
        isInactive={categoryId !== selectedCategoryId}
        handlePress={handlePress}
      />
    </View>
  );
};
export default SingleCategory;

//  If you pass a prop without a value, it will be treated as a boolean prop with a value of true. So, isInactive will be true unless you pass false explicitly, like this:
//  <Tab title={name} isInactive={false} />
