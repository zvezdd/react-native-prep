import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function index() {
  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 navButton:{
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
 }
})