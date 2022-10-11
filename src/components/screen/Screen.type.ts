import type { ReactNode } from "react";
import type { ScrollViewProps } from "react-native";
import type { THeaderProps } from "../header/Header.type";

export type TScreenProps = {
  children: ReactNode;
  header?: THeaderProps;
  isScrollable?: boolean;
  isGradient?: boolean;
  footer?: boolean;
} & ScrollViewProps;
