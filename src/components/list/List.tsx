import React, { FC } from "react";
import { styles } from "./List.style";
import { TListProps } from "./List.type";
import { color, size, Icon, Text } from "../../components";
import { TouchableOpacity } from "react-native-gesture-handler";

export const List: FC<TListProps> = ({
  children,
  variation,
  onPress,
  isDisabled = !onPress,
}) => {
  let iconName: String;
  let dynamicColor;
  let dynamicSize;

  switch (variation) {
    case "Empty":
      iconName = "check-clear";
      dynamicColor = color.primary;
      dynamicSize = size.m;
      break;
    case "Correct":
      iconName = "check-correct";
      dynamicColor = color.success;
      dynamicSize = size.m;
      break;
    case "Wrong":
      iconName = "check-wrong";
      dynamicColor = color.error;
      dynamicSize = size.m;
      break;

    default:
      iconName = "bullet";
      dynamicColor = color.primary;
      dynamicSize = size.xs;
      break;
  }
  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={() => onPress && onPress()}
      style={[styles.container]}
    >
      <Icon
        name={iconName}
        size={dynamicSize}
        color={dynamicColor}
        iconContainerStyle={{ paddingRight: size.xs }}
      />
      <Text color={dynamicColor}>{children}</Text>
    </TouchableOpacity>
  );
};
