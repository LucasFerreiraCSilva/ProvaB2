import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const PasswordRecoveryScreen = () => {
  const [email, setEmail] = useState('');

  const handleRecoverPassword = () => {
    // Lógica para processar a recuperação de senha
    // Pode incluir chamadas a APIs ou bancos de dados para enviar um email de recuperação

    // Limpar o campo de email após a recuperação de senha
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Recuperar Senha" onPress={handleRecoverPassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default PasswordRecoveryScreen;
