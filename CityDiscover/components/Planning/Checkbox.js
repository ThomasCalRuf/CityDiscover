import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function CheckBox() {
  const [isSelected, setSelection] = useState(false);

  return (
    <TouchableOpacity
      style={{
        height: 20,
        width: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isSelected ? 'black' : 'white',
      }}
      onPress={() => setSelection(!isSelected)}
    >
      <Text style={{ color: 'white' }}>{isSelected ? 'X' : ' '}</Text>
    </TouchableOpacity>
  );
}
