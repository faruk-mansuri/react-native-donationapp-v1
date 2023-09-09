import { Pressable, Text } from 'react-native';

const Button = ({ title, isDisabled, handlePress }) => {
  return (
    <Pressable
      disabled={isDisabled}
      style={{
        backgroundColor: '#2979F2',
        paddingVertical: 15,
        borderRadius: 50,
        opacity: isDisabled ? 0.5 : 1,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: 'PTSans_400Regular',
          fontSize: 18,
          color: '#fff',
          textAlign: 'center',
          textTransform: 'capitalize',
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
