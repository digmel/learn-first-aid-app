import React, { FC } from "react";
import { View, ScrollView } from "react-native";
import { styles } from "./Screen.style";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TScreenProps } from "./Screen.type";
import { size } from "@theme";
import { Header } from "../header/Header";

export const Screen: FC<TScreenProps> = ({
  containerStyle,
  contentStyle,
  children,
  footer,
  footerStyle,
  hasHeader,
  hasBack,
  headerStyle,
  isScrollViewDisabled = false,
  isFooterSticky = false,
  isHeaderSticky = false,
  ...props
}) => {
  const { bottom: spaceBottom, top: spaceTop } = useSafeAreaInsets();

  const safeAreaStyle = !hasHeader &&
    !footer && {
      paddingTop: spaceTop === 0 ? size.xl : spaceTop,
      paddingBottom: spaceBottom === 0 ? size.xl : spaceBottom,
    };

  const contentDynamicStyle = {
    ...safeAreaStyle,
  };

  const Container = isScrollViewDisabled ? View : ScrollView;

  const containerDynamicStyle = isScrollViewDisabled
    ? { style: [styles.container, containerStyle] }
    : { contentContainerStyle: [styles.container, containerStyle] };

  return (
    <View style={styles.globalWrapper} {...props}>
      {!!hasHeader && isHeaderSticky && (
        <View
          style={[
            styles.header,
            headerStyle,
            styles.stickyHeader,
            containerStyle,
          ]}
        >
          <Header hasBack />
        </View>
      )}
      <Container {...containerDynamicStyle}>
        {!!hasHeader && !isHeaderSticky && (
          <View style={[styles.header, headerStyle]}>
            <Header hasBack />
          </View>
        )}

        <View style={[styles.content, contentDynamicStyle, contentStyle]}>
          {children}
        </View>

        {!!footer && !isFooterSticky && (
          <View style={[styles.footer, footerStyle]}>{footer}</View>
        )}
      </Container>
      {!!footer && isFooterSticky && (
        <View style={[styles.footer, footerStyle, styles.stickyFooter]}>
          {footer}
        </View>
      )}
    </View>
  );
};
