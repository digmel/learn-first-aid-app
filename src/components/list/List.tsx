import React, { FC } from "react";
import { styles } from "./List.style";
import { TListProps } from "./List.type";
import { Icon, TIconName, Text } from "@components";
import { TouchableOpacity, View } from "react-native";
import { size } from "@theme";

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
    case "Empty":
      iconName = "CheckmarkEmpty";
      break;
    case "Correct":
      iconName = "CheckmarkSuccess";
      break;
    case "Wrong":
      iconName = "CheckmarkWrong";
      break;

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
