import React, { FC } from "react";
import { View } from "react-native";
import { TCardProps } from "./Card.type";
import { styles } from "./Card.style";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Svg, Text } from "@components";

export const Card: FC<TCardProps> = ({ onPress, title, svgPath }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress && onPress()}
    >
      <View style={styles.svgContainer}>
        <Svg uri={svgPath} />
      </View>

      <View style={styles.titleContainer}>
        <Text variation="title">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
