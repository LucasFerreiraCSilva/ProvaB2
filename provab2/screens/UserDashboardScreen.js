import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserDashboardScreen = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const goToRegister = () => {
    navigation.navigate('SignUpScreen');
  };

  const goToRecovery = () => {
    navigation.navigate('PasswordRecoveryScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RPG CardGame</Text>
      <Text style={styles.sub}>Jogo de cards</Text>
      <Button title="Login" onPress={goToLogin} />
      <Button title="Registro" onPress={goToRegister} />
      <Button title="Recuperar Senha" onPress={goToRecovery} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'purple',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'fantasy',
  },
  sub: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 180,
  },
});

export default UserDashboardScreen;
