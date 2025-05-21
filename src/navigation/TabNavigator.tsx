import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, User} from 'lucide-react-native';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarStyle: {},
  tabBarShowLabel: false,
};

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => <User size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
