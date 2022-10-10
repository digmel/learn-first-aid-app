import React, { FC } from "react";
import { View, ViewStyle, StyleProp, TouchableOpacity } from "react-native";
import { styles } from "./Header.style";
import { THeaderProps } from "./Header.type";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon } from "../icon/Icon";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { size } from "@theme";

export const Header: FC<THeaderProps> = ({
  containerStyle,
  children,
  containerLeftStyle,
  containerRightStyle,
  hasBack,
  hasMenu,
}) => {
  const navigation = useNavigation();

  const onPressMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };
  const onPressBack = () => {
    navigation.goBack();
  };

  const { top: spaceTop } = useSafeAreaInsets();

  const safeAreaStyle = {
    paddingTop: spaceTop === 0 ? size.m : spaceTop,
  };

  const containerDynamicStyle: StyleProp<ViewStyle> = {
    ...safeAreaStyle,
  };

  return (
    <View style={[styles.container, containerDynamicStyle, containerStyle]}>
      {hasBack && (
        <TouchableOpacity
          style={[styles.containerLeft, containerLeftStyle]}
          onPress={onPressBack}
        >
          <Icon name="ChevronOutline" />
        </TouchableOpacity>
      )}

      <View style={[styles.content]}>{children}</View>

      {hasMenu && (
        <TouchableOpacity
          style={[styles.containerRight, containerRightStyle]}
          onPress={onPressMenu}
        >
          <Icon name="MenuOutline" />
        </TouchableOpacity>
      )}
    </View>
  );
};
