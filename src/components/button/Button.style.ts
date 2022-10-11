import { StyleSheet } from "react-native";
import { size } from "@theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: size.m,
    borderRadius: size.xxl,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 150,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },

  textContainer: {
    width: "70%",
  },

  iconContainer: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
});
