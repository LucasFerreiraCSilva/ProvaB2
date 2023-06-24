import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserDashboardScreen from './screens/UserDashboardScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import PasswordRecoveryScreen from './screens/PasswordRecoveryScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <AppNavigator />
        <Stack.Screen name="Home" component={UserDashboardScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={SignUpScreen} />
        <Stack.Screen name="PasswordRecovery" component={PasswordRecoveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
