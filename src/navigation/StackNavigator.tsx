import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import ProductScreen from '../screens/Product';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerBackImage: () => null,
  headerLeftContainerStyle: {},
  headerShown: false,
  headerTitle: () => null,
  headerStyle: {},
};

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
