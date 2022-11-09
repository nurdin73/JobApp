import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

function ForgotPasswordScreen() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Forgot Password Screen</Text>
      <Button title="Kembali" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default ForgotPasswordScreen;
