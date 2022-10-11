import type { ReactNode } from "react";
import type { ScrollViewProps, ViewStyle, StyleProp } from "react-native";

export type TScreenProps = {
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;

  children: ReactNode;

  footer?: ReactNode;
  footerStyle?: StyleProp<ViewStyle>;

  hasHeader?: boolean;
  hasBack?: boolean;
  headerStyle?: StyleProp<ViewStyle>;
  title?: string;

  isScrollViewDisabled?: boolean;
  isFooterSticky?: boolean;
  isHeaderSticky?: boolean;
} & ScrollViewProps;
