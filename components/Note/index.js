import React from 'react';
import { View, Text } from 'react-native';

function Note({ note }) {
  const { name, content } = note;
  return (
    <View>
      <Text>{name}</Text>
      <Text>{content}</Text>
    </View>
  );
}

export default Note;