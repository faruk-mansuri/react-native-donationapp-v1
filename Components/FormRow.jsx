import { View, Text, TextInput } from 'react-native';

const FormRow = ({
  label,
  keyboardType,
  name,
  value,
  handleChange,
  secureText,
}) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text
        style={{
          fontFamily: 'PTSans_400Regular',
          fontSize: 16,
          color: '#36455A',
        }}
      >
        {label}
      </Text>
      <TextInput
        value={value}
        onChangeText={(value) => handleChange(name, value)}
        keyboardType={keyboardType ? keyboardType : 'default'}
        secureTextEntry={secureText}
        style={{
          borderBottomWidth: 1,
          borderColor: '#cbcbcbf8',
          paddingHorizontal: 10,
          paddingVertical: 3,
          fontSize: 16,
          borderRadius: 3,
          letterSpacing: 1,
          color: '#362e2ef8',
        }}
      />
    </View>
  );
};

export default FormRow;
