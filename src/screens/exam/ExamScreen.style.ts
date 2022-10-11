import { StyleSheet } from "react-native";
import { size, color } from "@theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  content: {
    justifyContent: "space-between",
  },

  testView: {
    flexBasis: "35%",
  },

  detailsSection: {
    flexBasis: "35%",
  },

  detailsView: {
    backgroundColor: color.gray100,
    flexGrow: 1,
  },
  headline: {
    marginHorizontal: size.xl,
    marginTop: size.l,
    paddingBottom: size.m,
    marginBottom: size.m,
    borderBottomColor: color.dark,
    borderBottomWidth: 1,
  },

  details: {
    marginHorizontal: size.xl,
  },
});
