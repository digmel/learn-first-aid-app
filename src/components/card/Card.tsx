import React, { FC, useEffect, useState } from "react";
import { View } from "react-native";
import { TCardProps } from "./Card.type";
import { styles } from "./Card.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getSvgURL } from "@utils";

import { Svg, Text } from "@components";

export const Card: FC<TCardProps> = ({ onPress, title, svg }) => {
  const [svgURL, setSvgURL] = useState<string>();

  useEffect(() => {
    getSvgURL("cards", svg).then((res) => setSvgURL(res));
  }, []);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress && onPress()}
    >
      <View style={styles.svgContainer}>
        <Svg uri={svgURL} />
      </View>

      <View style={styles.titleContainer}>
        <Text variation="title">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
