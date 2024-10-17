import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

const EntradaDeTelefon = () => {
  const [telefon, setTelefon] = useState('');
  const [isFocused, setIsFocused] = useState(false);


  
  const telefonRegex = /^(\+?[0-9]{1,3})?[ ]?([0-9]{9})$/;

  const isTelefonValid = (telefon) => telefonRegex.test(telefon);

  const handleChange = (text) => {
    setTelefon(text); // Permitir siempre la actualización del valor
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Telèfon"
        value={telefon}
        onChangeText={handleChange}
        keyboardType="phone-pad"
        autoCapitalize="none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        right={isTelefonValid(telefon) ? (
          <TextInput.Icon icon="check" color="green" />
        ) : null}
        style={styles.input}
      />
      <HelperText type="error" visible={!isTelefonValid(telefon) && telefon !== ''}>
        Número de telèfon incorrecte
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

export default EntradaDeTelefon;
