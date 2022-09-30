import React, { FC } from "react";
import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import { View } from "react-native";
import { TIconProps } from "./Icon.type";
import { styles } from "./Icon.style";
import { size as configSize } from "@components";

const icoMoonConfig = require("./selection.json");

const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig);

export const Icon: FC<TIconProps> = ({
  name,
  size = configSize.l,
  color,
  iconContainerStyle,
  iconStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, iconContainerStyle]} {...props}>
      <CustomIcon
        style={[styles.icon, iconStyle]}
        name={name}
        size={size}
        color={color}
      ></CustomIcon>
    </View>
  );
};
