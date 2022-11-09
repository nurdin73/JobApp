import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '.';
import ExperiencesScreen from './Experiences';
import SkillScreen from './Skills';

const Stack = createNativeStackNavigator();

function NavigationProfile() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="experiences" component={ExperiencesScreen} />
      <Stack.Screen name="skills" component={SkillScreen} />
    </Stack.Navigator>
  );
}

export default NavigationProfile;
