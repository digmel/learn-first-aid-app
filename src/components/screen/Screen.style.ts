import { StyleSheet } from "react-native";
import { size, color } from "@theme";

export const styles = StyleSheet.create({
  globalWrapper: {
    flex: 1,
    backgroundColor: color.light,
  },

  container: {
    flexGrow: 1,
  },

  header: {
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },

  content: {
    flex: 1,
    paddingHorizontal: size.xl,
    paddingTop: 16,
    paddingBottom: 124,
  },

  footer: {
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
});
