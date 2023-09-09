import { View, Text, StyleSheet } from 'react-native';
const Header = ({ title, titleColor, titleStyle }) => {
  return (
    <View>
      <Text
        style={[
          style[titleStyle],
          {
            textTransform: 'capitalize',
            color: titleColor || '#222',
          },
        ]}
      >
        {title || ''}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  title1: {
    fontFamily: 'PTSans_400Regular',
    fontSize: 24,
    fontWeight: '600',
  },
  title2: {
    fontFamily: 'PTSans_400Regular',
    fontSize: 18,
    fontWeight: '700',
  },
  title3: {
    fontFamily: 'PTSans_400Regular',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Header;
