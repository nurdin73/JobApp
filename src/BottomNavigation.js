import React from 'react';
import HomeScreen from './screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatureIcon from 'react-native-vector-icons/Feather';
import DiscoverScreen from './screens/Discover';
import FavoriteScreen from './screens/Favorite';
import NavigationProfile from './screens/Profile/NavigationProfile';
import {COLOR_PRIMARY, COLOR_SECONDARY} from '../config';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLOR_PRIMARY,
        tabBarInactiveTintColor: COLOR_SECONDARY,
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
        component={NavigationProfile}
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

export default BottomNavigation;
