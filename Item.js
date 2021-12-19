import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function Item({ pressHandler, item}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginTop: 20,
    borderColor: 'blue',
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 1,
    borderRadius: 15,
  }
});
