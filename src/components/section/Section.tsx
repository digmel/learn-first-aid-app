import React, {FC} from 'react';
import {View, ViewStyle} from 'react-native';
import {styles} from './Section.style';
import {TSectionProps} from './Section.type';
import {size, Text} from '@components';

export const Section: FC<TSectionProps> = ({
  title,
  subtitle,
  isCentered = false,
  isFullWidth = false,
  children,
  topSpace,
  bottomSpace,
  containerStyle,
  contentStyle,
}) => {
  const fullWidthStyle = isFullWidth && {marginHorizontal: -size.xl};

  const topSpaceStyle = !!topSpace && {marginTop: topSpace};

  const bottomSpaceStyle = !!bottomSpace
    ? {marginBottom: bottomSpace}
    : {marginBottom: size.m};

  const variationStyle: ViewStyle = {};

  const contentDynamicStyle: ViewStyle = {};

  if (isCentered) {
    contentDynamicStyle.alignItems = 'center';
    contentDynamicStyle.justifyContent = 'center';
  }

  const containerDynamicStyle = {
    ...variationStyle,
    ...fullWidthStyle,
    ...topSpaceStyle,
    ...bottomSpaceStyle,
  };

  return (
    <View style={[styles.container, containerDynamicStyle, containerStyle]}>
      {title && (
        <View style={styles.headline}>
          <Text variation="H1_bold">{`${title} `}</Text>
          {subtitle && <Text variation="H1_light">{subtitle}</Text>}
        </View>
      )}
      <View style={[styles.content, contentDynamicStyle, contentStyle]}>
        {children}
      </View>
    </View>
  );
};
