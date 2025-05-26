import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import ProductScreen from '../screens/Product';
import LoginScreen from '../screens/Login';

export interface ProductScreenRouteParams {
  id?: string;
  name?: string;
  price?: string;
  description?: string;
}

export type RootStackParamList = {
  Login: undefined; // Parámetros que espera la pantalla Login
  TabNavigator: undefined; // TabNavigator no tiene parámetros
  Product: ProductScreenRouteParams; // Parámetros que espera la pantalla Product
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  headerBackImage: () => null,
  headerLeftContainerStyle: {},
  headerShown: false,
  headerTitle: () => null,
  headerStyle: {},
};

export default function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        {!isLoggedIn ? (
          <Stack.Screen name="Login">
            {() => <LoginScreen onLogin={() => setIsLoggedIn(true)} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="Product" component={ProductScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
