import { View, Text } from 'react-native';

const Badge = ({ title }) => {
  return (
    <View
      style={{
        backgroundColor: '#145855',
        width: 130,
        display: 'inline-block',
        paddingVertical: 5,
        borderRadius: 50,
      }}
    >
      <Text
        style={{
          fontFamily: 'PTSans_400Regular',
          fontSize: 14,
          textAlign: 'center',
          textTransform: 'capitalize',
          color: '#fff',
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Badge;
