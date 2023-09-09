import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { TextInput, Pressable } from 'react-native';

const SearchComponent = ({ onSearch }) => {
  const textInputRef = useRef(null);
  const [search, setSearch] = useState('');

  const handleFocus = () => textInputRef.current.focus();

  useEffect(() => {
    onSearch(search);
  }, [search]);

  return (
    <Pressable
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        borderRadius: 7,
        marginHorizontal: 24,
        paddingVertical: 15,
        backgroundColor: '#f3f5f9',
      }}
      onPress={handleFocus}
    >
      <FontAwesomeIcon icon={faSearch} color='#25C0FF' size={22} />
      <TextInput
        style={{
          borderWidth: 1,
          width: '80%',
          fontFamily: 'PTSans_400Regular',
          fontSize: 14,
          color: '#686C7A',
          letterSpacing: 1,
          backgroundColor: '#fff',
          borderColor: 'transparent',
          borderRadius: 5,
          paddingHorizontal: 7,
        }}
        placeholder='Search'
        ref={textInputRef}
        value={search}
        onChangeText={setSearch}
      />
    </Pressable>
  );
};

export default SearchComponent;
