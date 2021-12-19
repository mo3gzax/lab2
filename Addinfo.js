import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function Addinfo({ submitHandler }) {
  const [texting, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };
  
  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='new information...'
        onChangeText={changeHandler} 
      />
      <Button color='blue' onPress={() => submitHandler(texting)} title='Add information' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    paddingHorizontal: 9,
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
});
