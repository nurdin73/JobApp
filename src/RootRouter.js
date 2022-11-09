import React from 'react';
import HomeScreen from './screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatureIcon from 'react-native-vector-icons/Feather';
import DiscoverScreen from './screens/Discover';
import FavoriteScreen from './screens/Favorite';
import ProfileScreen from './screens/Profile';

const Tab = createBottomTabNavigator();

function RootRouter() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: '#8cb5e2',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 60,
          borderRadius: 15,
          overflow: 'hidden',
          position: 'absolute',
          bottom: 15,
          left: 15,
          right: 15,
          elevation: 1,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <Icon
              name={focused ? 'earth' : 'earth-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <Icon
              name={focused ? 'bookmark' : 'bookmark-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <FeatureIcon
              name={focused ? 'user' : 'user'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootRouter;
