import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/index.styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>
      <TouchableOpacity onPress={ () => alert("hey")} >
        <Text>Hey</Text>
      </TouchableOpacity>
      <Pressable onPress={ () => alert("hey")} >
        <Text>Hey</Text>
      </Pressable>
    </View>
  );
}


