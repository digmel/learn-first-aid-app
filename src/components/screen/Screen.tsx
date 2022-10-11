import React, { FC } from "react";
import { View, ScrollView } from "react-native";
import { styles } from "./Screen.style";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TScreenProps } from "./Screen.type";
import { Header } from "../header/Header";
import { LinearGradient } from "expo-linear-gradient";
import { size, color } from "@theme";

export const Screen: FC<TScreenProps> = ({
  children,
  header,
  footer,
  isScrollable = true,
  isGradient = false,
}) => {
  const { bottom: spaceBottom, top: spaceTop } = useSafeAreaInsets();

  const safeAreaStyle = !header &&
    !footer && {
      paddingTop: spaceTop === 0 ? size.xl : spaceTop,
      paddingBottom: spaceBottom === 0 ? size.xl : spaceBottom,
    };

  const Container = isScrollable ? ScrollView : View;

  const containerStyle = isScrollable
    ? { contentContainerStyle: styles.container }
    : { style: styles.container };

  return (
    <View style={styles.globalWrapper}>
      {isGradient && (
        <LinearGradient
          colors={[color.gradientStart, color.gradientEnd]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "200%",
          }}
        />
      )}

      {header && (
        <View style={styles.header}>
          <Header
            title={header.title}
            hasBack={header.hasBack}
            hasMenu={header.hasMenu}
          />
        </View>
      )}

      <Container {...containerStyle}>
        <View style={[styles.content, safeAreaStyle]}>{children}</View>
      </Container>
      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
};
