import { Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = ({ onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        marginTop: 7,
        width: 35,
        height: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
      }}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};

export default BackButton;
