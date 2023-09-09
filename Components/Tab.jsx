import { Pressable, Text } from 'react-native';

const Tab = ({ title, isInactive, handlePress }) => {
  return (
    <Pressable
      style={{
        paddingHorizontal: 40,
        opacity: isInactive ? 0.5 : 1,
        backgroundColor: isInactive ? '#F3F5F9' : '#2979F2',
        paddingVertical: 15,
        borderRadius: 50,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: 'PTSans_400Regular',
          fontSize: 16,
          textAlign: 'center',
          textTransform: 'capitalize',
          color: isInactive ? '#79869F' : '#fff',
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Tab;
