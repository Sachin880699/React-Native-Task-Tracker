import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Users from '../screens/users';
import React from 'react';
import Login from '../screens/Authentication/login';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Users" component={Users} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      
    </Stack.Navigator>
  );
}

export default MyStack;