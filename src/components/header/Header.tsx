import React, { FC } from "react";
import { View, ViewStyle, StyleProp, TouchableOpacity } from "react-native";
import { styles } from "./Header.style";
import { THeaderProps } from "./Header.type";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon } from "../icon/Icon";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { size } from "@theme";
import { Text } from "../text/Text";

export const Header: FC<THeaderProps> = ({ title, hasBack, hasMenu }) => {
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
    <View style={[styles.container, containerDynamicStyle]}>
      <TouchableOpacity style={styles.containerStart} onPress={onPressBack}>
        {hasBack && <Icon name="ChevronOutline" />}
      </TouchableOpacity>

      <View style={styles.content}>
        <Text>{title}</Text>
      </View>

      <TouchableOpacity style={styles.containerEnd} onPress={onPressMenu}>
        {hasMenu && <Icon name="MenuOutline" />}
      </TouchableOpacity>
    </View>
  );
};
