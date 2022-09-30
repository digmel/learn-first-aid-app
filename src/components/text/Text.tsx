import React, { FC } from "react";
import { StyleProp, Text as NativeText, TextStyle } from "react-native";
import { styles } from "./Text.style";
import { TTextProps } from "./Text.type";
import { color as configColor } from "../../components";
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_800ExtraBold,
  Poppins_300Light,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

export const Text: FC<TTextProps> = ({
  color = configColor.primary,
  variation = "body_light",
  textStyle,
  children,
  ...props
}) => {
  let variationStyle: StyleProp<TextStyle> = {};

  let [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_800ExtraBold,
    Poppins_300Light,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  switch (variation) {
    case "H1_bold":
      variationStyle.fontFamily = "Poppins_800ExtraBold";
      variationStyle.fontSize = 24;
      break;
    case "H1_light":
      variationStyle.fontFamily = "Poppins_200ExtraLight";
      variationStyle.fontSize = 24;
      break;
    case "H2_bold":
      variationStyle.fontFamily = "Poppins_800ExtraBold";
      variationStyle.fontSize = 18;
      break;
    case "H2_light":
      variationStyle.fontFamily = "Poppins_200ExtraLight";
      variationStyle.fontSize = 18;
      break;
    case "title":
      variationStyle.fontFamily = "Poppins_300Light";
      variationStyle.fontSize = 14;
      break;
    case "subtitle":
      variationStyle.fontFamily = "Poppins_200ExtraLight";
      variationStyle.fontSize = 14;
      break;
    case "body_bold":
      variationStyle.fontFamily = "Poppins_400Regular";
      variationStyle.fontSize = 16;
      break;
    case "body_light":
      variationStyle.fontFamily = "Poppins_300Light";
      variationStyle.fontSize = 16;
      break;
    case "button":
      variationStyle.fontFamily = "Poppins_400Regular";
      variationStyle.fontSize = 16;
      break;
    case "input":
      variationStyle.fontFamily = "Poppins_400Regular";
      variationStyle.fontSize = 14;
      variationStyle.color = configColor.gray400;
      break;
  }

  const textDynamicStyle: StyleProp<TextStyle> = {
    ...variationStyle,
    color,
  };

  return (
    <NativeText style={[styles.text, textDynamicStyle, textStyle]} {...props}>
      {children}
    </NativeText>
  );
};
