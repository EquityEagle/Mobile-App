import { StyleSheet } from "react-native";
import { globalStyles } from "./global";

export const StyledDash = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    padding: 25,
    // backgroundColor: globalStyles.colors.bg,
    position: "relative",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  userName: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
  },
  innerText: {
    fontWeight: "500",
    fontSize: 15,
    color: globalStyles.colors.neutral500,
    textAlign: "center",
  },
  accountContainer: {
    display: "flex",
    gap: 10,
    height: "auto",
    width: "100%",
    flexDirection: "column",
    position: "relative",
  },
  accounts: {
    backgroundColor: "#000",
    borderRadius: 7,
    width: "100%",
    flexDirection: "column",
    gap: 12,
    position: "relative",
    height: "auto",
    padding: 12,
    display: "flex",
  },
  accountHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  accountHeaderText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 15,
    overflow: "hidden",
    width: 200,
  },
  toggle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  balanceCont: {
    flexDirection: "row",
    gap: 10,
  },
  balanceText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
  },
  chartMetrx: {
    borderColor: "blue",
    borderWidth: 1,
    padding: 4,
    borderRadius: 5,
  },
  metrixText: {
    color: "#fff",
    textDecorationColor: "#fff",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  visibleText: {
    color: "blue",
    fontWeight: "600",
    fontSize: 14,
  },
});
