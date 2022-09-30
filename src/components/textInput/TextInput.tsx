import React, {FC, useState} from 'react';
import {TextInput as Input, View} from 'react-native';
import {styles} from './TextInput.style';
import {TTextInputProps} from './TextInput.type';
import {color, Text} from '@components';

export const TextInput: FC<TTextInputProps> = ({
  label,
  errorMessage,
  isDisabled = false,
  containerStyle,
  value,
  onBlur,
  onFocus,
  ...props
}) => {
  const [isActive, setActive] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [placeholder, setPlaceholder] = useState(label);

  const dynamicProperties = {
    backgroundColor: isActive || isFilled ? 'transparent' : color.gray100,
    borderColor: isActive ? color.gray400 : color.gray200,
  };

  if (!!errorMessage && !isActive) {
    dynamicProperties.borderColor = color.error;
  }

  const inputDynamicStyle = {
    ...dynamicProperties,
  };

  const _onFocus = () => {
    setPlaceholder('');
    setActive(true);
  };

  const _onBlur = () => {
    setPlaceholder(label);
    value ? setIsFilled(true) : setIsFilled(false);
    setActive(false);
  };

  return (
    <View style={styles.container}>
      {!!label && (isActive || isFilled) && (
        <View style={styles.labelContainer}>
          <Text
            variation="input"
            color={color.gray500}
            textStyle={styles.label}>
            {label}
          </Text>
        </View>
      )}
      <Input
        style={[styles.input, inputDynamicStyle]}
        editable={!isDisabled}
        placeholderTextColor={isDisabled ? color.gray300 : color.gray400}
        onFocus={_onFocus}
        onBlur={_onBlur}
        placeholder={placeholder}
        autoCapitalize="none"
        {...props}
      />
      {!!errorMessage && (
        <View style={styles.errorContainer}>
          <Text color={color.error}>{errorMessage}</Text>
        </View>
      )}
    </View>
  );
};
