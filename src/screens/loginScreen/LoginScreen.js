import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import loginScreenStyle from './loginScreenStyle';
import Input from '../../components/input/Input';
import Email from 'react-native-vector-icons/Entypo';
import Lock from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/button/Button';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        navigation.replace('Home');
      }
    };
    checkLoginStatus();
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Validation Error',
        text2: 'Email and Password are required',
      });
      return;
    }
    if (!validateEmail(email)) {
      Toast.show({
        type: 'error',
        text1: 'Validation Error',
        text2: 'Please enter a valid email address',
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('userToken', data.token);
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Login Successful',
        });
        navigation.replace('Home');
      } else {
        Toast.show({
          type: 'error',
          text1: 'Login Error',
          text2: data.error || 'Invalid credentials',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Unable to process your request. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={loginScreenStyle.container}>
      <Image
        style={loginScreenStyle.image}
        source={require('../../assets/loginImage.png')}
        resizeMode="contain"
      />
      <View style={loginScreenStyle.innerContainer}>
        <Text style={loginScreenStyle.heading}>Login</Text>

        <Input
          placeholder="Email ID"
          icon={<Email name="email" size={20} color="rgba(0, 0, 0, 0.4)" />}
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          placeholder="Password"
          icon={<Lock name="lock-outline" size={20} color="rgba(0, 0, 0, 0.4)" />}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={loginScreenStyle.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <Button
          onPress={handleLogin}
          title={loading ? 'Logging In...' : 'Login'}
          style={{ backgroundColor: '#0165ff' }}
          disabled={loading}
        />

        <View style={loginScreenStyle.orTextContainer}>
          <Text style={loginScreenStyle.line}></Text>
          <Text>OR</Text>
          <Text style={loginScreenStyle.line}></Text>
        </View>

        <Button
          image={
            <Image
              source={require('../../assets/googleLogo.png')}
              style={{ height: 30, width: 30 }}
            />
          }
          title="Login With Google"
          style={{ backgroundColor: '#f1f6f7' }}
          textStyle={{ color: 'black' }}
        />
        <Text style={loginScreenStyle.registerContainer}>
          New to Logistics?
          <Text style={loginScreenStyle.registerText}> Register</Text>
        </Text>
      </View>

      {/* Toast Component */}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

export default LoginScreen;
