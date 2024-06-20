import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator, TabNavigatorParams} from './TabNavigator';
import {NavigatorScreenParams} from '@react-navigation/native';

export type AppNavigatorParams = {
  TabNavigator: NavigatorScreenParams<TabNavigatorParams>;
};

const Stack = createNativeStackNavigator<AppNavigatorParams>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};
