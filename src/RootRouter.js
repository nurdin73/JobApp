import React from 'react';
import HomeScreen from './screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import DiscoverScreen from './screens/Discover';
import FavoriteScreen from './screens/Favorite';
import ProfileScreen from './screens/Profile';

const Tab = createBottomTabNavigator();

function RootRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({size, focused}) => (
            <Icon name={focused ? 'home' : 'home-outline'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({size, focused}) => (
            <Icon name={focused ? 'earth' : 'earth-outline'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({size, focused}) => (
            <Icon
              name={focused ? 'bookmark' : 'bookmark-outline'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({size, focused}) => (
            <Icon
              name={focused ? 'person-circle' : 'person-circle-outline'}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootRouter;
