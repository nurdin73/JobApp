import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  PADDING,
  ROUNDED,
} from '../../../config';

function RegisterScreen({navigation}) {
  const styles = StyleSheet.create({
    circleBg: {
      // backgroundColor: COLOR_PRIMARY,
      width: useWindowDimensions().width,
      height: useWindowDimensions().height / 2,
      position: 'absolute',
      top: 0,
      borderBottomLeftRadius: ROUNDED * 3,
    },
    formLogin: {
      position: 'absolute',
      // top: useWindowDimensions().height / 3,
      left: useWindowDimensions().width / 10,
      right: useWindowDimensions().width / 10,
      backgroundColor: '#fff',
      padding: PADDING,
      borderRadius: ROUNDED,
    },
    textLogin: {
      fontSize: 30,
      color: COLOR_PRIMARY,
      fontWeight: 'bold',
    },
    textDesc: {
      fontSize: 14,
      marginBottom: 30,
      fontStyle: 'italic',
    },
    button: {
      backgroundColor: COLOR_PRIMARY,
      padding: PADDING / 2,
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      borderRadius: ROUNDED / 2,
      fontSize: 20,
    },
    input: {
      borderColor: COLOR_SECONDARY,
      borderWidth: 1,
      marginBottom: 10,
      borderRadius: ROUNDED / 2,
      paddingHorizontal: PADDING / 2,
      color: COLOR_SECONDARY,
    },
    textAncor: {
      marginTop: 10,
      marginBottom: 10,
      textAlign: 'right',
      width: '100%',
      color: COLOR_PRIMARY,
    },
    // socialLogin: {
    //   position: 'absolute',
    //   top: useWindowDimensions().width / 2,
    //   left: useWindowDimensions().width / 10,
    //   right: useWindowDimensions().width / 10,
    // },
    wrapsocial: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    social: {
      width: useWindowDimensions().width / 2 - 70,
      backgroundColor: '#EFF5F5',
      padding: PADDING / 2,
      marginBottom: 10,
      borderColor: COLOR_SECONDARY,
      borderWidth: 1,
      borderRadius: ROUNDED / 2,
      textAlign: 'center',
    },
  });

  return (
    <>
      <LinearGradient
        colors={[COLOR_PRIMARY, COLOR_SECONDARY]}
        style={styles.circleBg}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.formLogin}>
            <Text style={styles.textLogin}>Login</Text>
            <Text style={styles.textDesc}>Continue using</Text>
            <View style={styles.socialLogin}>
              <View style={styles.wrapsocial}>
                <TouchableOpacity>
                  <Text style={{...styles.social}}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{...styles.social}}>Facebook</Text>
                </TouchableOpacity>
              </View>
              <Text style={{textAlign: 'center', marginBottom: 10}}>Or</Text>
            </View>
            <TextInput placeholder="firstname" style={styles.input} />
            <TextInput placeholder="lastname" style={styles.input} />
            <TextInput placeholder="email" style={styles.input} />
            <TextInput placeholder="password" style={styles.input} />
            <TextInput
              placeholder="password confirmation"
              style={styles.input}
            />
            <TouchableOpacity>
              <Text style={styles.button}>Register</Text>
            </TouchableOpacity>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>Do you Have Account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textAncor}>Login now!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}

export default RegisterScreen;
