import { TextStyle, StyleProp } from "react-native";

export type TTextVariation =
  | "H1_bold"
  | "H1_light"
  | "H2_bold"
  | "H2_light"
  | "title"
  | "subtitle"
  | "body_bold"
  | "body_light"
  | "button"
  | "input";

export type TTextProps = {
  variation?: TTextVariation;
  textStyle?: StyleProp<TextStyle>;
  color?: string;
  children: any;
};
