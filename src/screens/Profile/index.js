import React from 'react';
import {Button, Text, View} from 'react-native';

function ProfileScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Profile</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Skill" onPress={() => navigation.navigate('skills')} />
    </View>
  );
}

export default ProfileScreen;
