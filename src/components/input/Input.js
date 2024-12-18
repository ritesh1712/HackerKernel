import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import inputStyle from './inputStyle';

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  style = {},
  icon, 
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(secureTextEntry);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={inputStyle.container}>
      <View style={inputStyle.inputContainer}>
        {icon && <View style={inputStyle.iconContainer}>{icon}</View>}
        <View style={inputStyle.inputWrapper}>
          <View style={inputStyle.innerWrapper}>
            <TextInput
              style={[inputStyle.input, style]}
              placeholder={placeholder}
              placeholderTextColor="#999"
              value={value}
              onChangeText={onChangeText}
              secureTextEntry={secureTextEntry && isPasswordVisible}
              keyboardType={keyboardType}
            />
            {placeholder === 'Password' && (
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Icon
                  style={inputStyle.eyeIcon}
                  name={!isPasswordVisible ? 'eye' : 'eye-with-line'}
                  size={20}
                  color="rgba(0, 0, 0, 0.4)"
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={inputStyle.underline} />
        </View>
      </View>
    </View>
  );
};

export default Input;
