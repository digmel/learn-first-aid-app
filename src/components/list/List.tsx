import React, { FC } from "react";
import { styles } from "./List.style";
import { TListProps } from "./List.type";
import { size, Icon, TIconName, Text } from "@components";
import { TouchableOpacity, View } from "react-native";

export const List: FC<TListProps> = ({
  children,
  variation,
  onPress,
  isDisabled = !onPress,
}) => {
  let iconName: TIconName;
  let dynamicColor;
  let dynamicSize;

  switch (variation) {
    // case "Empty":
    //   iconName = "check-clear";
    //   dynamicColor = color.primary;
    //   dynamicSize = size.m;
    //   break;
    // case "Correct":
    //   iconName = "check-correct";
    //   dynamicColor = color.success;
    //   dynamicSize = size.m;
    //   break;
    // case "Wrong":
    //   iconName = "check-wrong";
    //   dynamicColor = color.error;
    //   dynamicSize = size.m;
    //   break;

    default:
      iconName = "BulletSolid";
      dynamicSize = size.xs;
      break;
  }
  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={() => onPress && onPress()}
      style={[styles.container]}
    >
      <View style={styles.icon}>
        <Icon name={iconName} width={dynamicSize} height={dynamicSize} />
      </View>
      <Text color={dynamicColor}>{children}</Text>
    </TouchableOpacity>
  );
};
