import { StyleSheet } from "react-native";

export const styledauth = StyleSheet.create({
  container: {
    display: "flex",
    padding: "20px",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "rgba(0,0,0,0.91)",
    height: "100%",
    gap: 10,
  },
  innerContainer: {
    width: "80%",
    gap: 15,
    position: "relative",
  },
  authText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "500",
  },
  optionTextContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
  },
  optionText: {
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
  },
  optionTextLink: {
    color: "blue",
    textDecorationColor: "blue",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
});
