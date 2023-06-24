import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserDashboardScreen from './screens/UserDashboardScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/SignUpScreen';
import PasswordRecoveryScreen from './screens/PasswordRecoveryScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={UserDashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={RegisterScreen} />
        <Stack.Screen
          name="PasswordRecoveryScreen"
          component={PasswordRecoveryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
