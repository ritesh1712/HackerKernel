import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import buttonStyle from './buttonStyle'

const Button = ({
  title,
  onPress,
  style = {},
  textStyle = {},
  icon = null, 
  disabled = false,
  image = null
}) => {
  return (
    <TouchableOpacity
      style={[buttonStyle.button, disabled ? buttonStyle.disabled : {}, style]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <View style={buttonStyle.contentContainer}>
        {icon && <View style={buttonStyle.iconContainer}>{icon}</View>}
        {image && <View style={buttonStyle.imageContainer}>{image}</View>}
        <Text style={[buttonStyle.text, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};



export default Button;
