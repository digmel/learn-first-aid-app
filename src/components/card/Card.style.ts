import { StyleSheet } from "react-native";
import { size, color } from "@components";

export const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 150,
    borderColor: color.dark,
    borderWidth: 1,
    borderRadius: size.l,
    marginBottom: size.l,
    marginRight: size.m,
  },

  svgContainer: {
    flexBasis: "65%",
    paddingHorizontal: 12,
    paddingTop: 32,
  },

  titleContainer: {
    flexBasis: "35%",
    alignItems: "center",
    justifyContent: "center",
  },
});
