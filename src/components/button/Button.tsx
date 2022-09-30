import React, {FC} from 'react';
import {TouchableOpacity, TextStyle, ViewStyle, View} from 'react-native';
import {styles} from './Button.style';
import type {TButtonProps} from './Button.type';
import {color, Icon, Loader, Text, size as configSize} from '@components';

export const Button: FC<TButtonProps> = ({
  text,
  onPress,
  variation = 'primary',
  isDisabled = false,
  containerStyle,
  isFluid = false,
  size = 'large',
  isLoading,
  textStyle,
  isUppercase = false,
  iconLeft,
  iconRight,
  iconSize = configSize.l,
  iconContainerStyle,
  textContainerStyle,
  ...props
}) => {
  const BORDER_OUTLINE_WIDTH = 1;

  const HEIGHT_LARGE = 48;
  const HEIGHT_MEDIUM = 40;
  const HEIGHT_SMALL = 32;

  const dynamicProperties = {
    backgroundColor: color.primary,
    textColor: color.dark,
    borderColor: color.dark,
    borderWidth: 0,
    paddingHorizontal: configSize.xl,
    height: HEIGHT_LARGE,
    textVariation: 'button',
    iconColor: color.light,
  };

  switch (variation) {
    case 'primary':
      dynamicProperties.backgroundColor = isDisabled
        ? color.disabled
        : color.primary;
      dynamicProperties.borderWidth = 0;
      dynamicProperties.textColor = color.light;
      dynamicProperties.iconColor = color.light;
      break;
    case 'secondary':
      dynamicProperties.backgroundColor = 'transparent';
      dynamicProperties.borderWidth = BORDER_OUTLINE_WIDTH;
      dynamicProperties.textColor = isDisabled ? color.disabled : color.primary;
      dynamicProperties.borderColor = isDisabled
        ? color.disabled
        : color.primary;
      dynamicProperties.iconColor = isDisabled ? color.disabled : color.primary;
      break;
    case 'link':
      dynamicProperties.backgroundColor = isDisabled
        ? color.gray200
        : 'transparent';
      dynamicProperties.textColor = color.primary;
      dynamicProperties.iconColor = color.primary;
      break;
    case 'google':
      dynamicProperties.backgroundColor = color.google;
      dynamicProperties.textColor = color.light;
      textContainerStyle = styles.textContainer;
      break;
    case 'facebook':
      dynamicProperties.backgroundColor = color.facebook;
      dynamicProperties.textColor = color.light;
      dynamicProperties.iconColor = color.light;
      textContainerStyle = styles.textContainer;
      break;
    case 'email':
      dynamicProperties.textColor = color.light;
      dynamicProperties.iconColor = color.light;
      textContainerStyle = styles.textContainer;
      break;
  }

  switch (size) {
    case 'large':
      dynamicProperties.paddingHorizontal = configSize.xl;
      dynamicProperties.height = HEIGHT_LARGE;
      break;
    case 'medium':
      dynamicProperties.paddingHorizontal = configSize.l;
      dynamicProperties.height = HEIGHT_MEDIUM;
      break;
    case 'small':
      dynamicProperties.paddingHorizontal = configSize.m;
      dynamicProperties.height = HEIGHT_SMALL;
      break;
  }

  const containerDynamicStyle: ViewStyle = {
    backgroundColor: dynamicProperties.backgroundColor,
    borderWidth: dynamicProperties.borderWidth,
    borderColor: dynamicProperties.borderColor,
    paddingHorizontal: dynamicProperties.paddingHorizontal,
    height: dynamicProperties.height,
  };

  const wrapperStyle: ViewStyle = {
    alignItems: isFluid ? 'center' : undefined,
  };

  const textDynamicStyle: TextStyle = {
    color: dynamicProperties.textColor,
    textTransform: isUppercase ? 'uppercase' : 'none',
  };

  const iconContainerDynamicStyle: TextStyle = {
    marginRight: iconLeft ? configSize.m : 0,
    marginLeft: iconRight ? configSize.m : 0,
  };

  return (
    <View style={wrapperStyle}>
      <TouchableOpacity
        disabled={isDisabled}
        style={[styles.container, containerDynamicStyle, containerStyle]}
        onPress={() => onPress && onPress()}
        {...props}>
        <Loader isLoading={isLoading} loaderColor={dynamicProperties.textColor}>
          <View style={styles.contentContainer}>
            {!!iconLeft && (
              <View
                style={[
                  styles.iconContainer,
                  iconContainerDynamicStyle,
                  iconContainerStyle,
                ]}>
                <Icon
                  name={iconLeft}
                  color={dynamicProperties.iconColor}
                  iconStyle={iconContainerDynamicStyle}
                  size={configSize.l}
                />
              </View>
            )}
            <View style={[textContainerStyle]}>
              <Text
                variation="button"
                textStyle={[textDynamicStyle, textStyle]}>
                {text}
              </Text>
            </View>
            {!!iconRight && (
              <View
                style={[
                  styles.iconContainer,
                  iconContainerDynamicStyle,
                  iconContainerStyle,
                ]}>
                <Icon
                  name={iconRight}
                  color={dynamicProperties.iconColor}
                  iconStyle={iconContainerDynamicStyle}
                  size={configSize.l}
                />
              </View>
            )}
          </View>
        </Loader>
      </TouchableOpacity>
    </View>
  );
};
