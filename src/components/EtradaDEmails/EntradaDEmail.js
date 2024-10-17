import React, { useState } from 'react';
import { View, StyleSheet, TextInputComponent } from 'react-native';
import { TextInput, HelperText, IconButton } from 'react-native-paper';

const EntradaDEmail = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const emailRegex = /^[a-zA-Z]+\@[a-zA-Z\_\-0-9]+\.[a-z]{2,5}$/;

  const isEmailValid = (email) => emailRegex.test(email);

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address" 
        autoCapitalize="none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        right={isEmailValid(email) ? (<TextInput.Icon icon="check" color="green" /> ): null} 
        style={styles.input}
      />
      
      <HelperText type="error" visible={!isEmailValid(email) && isFocused} >
      Adresa email incorrecta
      </HelperText>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  input: {
    backgroundColor: 'white',
  },
});

export default EntradaDEmail;
