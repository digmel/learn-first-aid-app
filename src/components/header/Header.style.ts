import { StyleSheet } from "react-native";
import { color } from "@theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: color.gray300,
    borderBottomWidth: 0.5,
    paddingBottom: 4,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerStart: {
    justifyContent: "center",
    flexBasis: "20%",
  },
  containerEnd: {
    flexBasis: "20%",
    justifyContent: "center",
  },
});
