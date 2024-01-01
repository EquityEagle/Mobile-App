import { StyleSheet } from "react-native";
import { globalStyles } from "./global";

export const StyledNav = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#000",
    borderTopColor: "grey",
    borderTopWidth: 1,
    justifyContent: "space-between",
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: "center",
  },
  navContainer: {
    alignItems: "center",
  },
  navText: {
    // color: "#fff",
    fontWeight: "500",
    fontSize: 14,
  },
});

export const StyledModal = StyleSheet.create({
  container: {
    gap: 11,
    backgroundColor: "#000",
    position: "relative",
    padding: 5,
    marginTop: 10,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 19,
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 17,
  },
  contentItem: {
    backgroundColor: globalStyles.colors.slate900,
    width: 145,
    height: "auto",
    padding: 17,
    borderRadius: 8,
    // flexDirection: "row",
    gap: 5,
  },
  contextText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
    alignItems: "center",
  },
});

export const StyledMetrix = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 15,
    position: "relative",
    width: "100%",
    height: "100%",
  },
  objective: {
    width: "100%",
    backgroundColor: "#000",
    borderRadius: 12,
    position: "relative",
  },
  objectiveHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
  },
  objectiveHeaderText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
  objectiveText: {
    color: globalStyles.colors.neutral500,
    fontWeight: "600",
    fontSize: 13,
  },
  objectiveResultText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
  },
  objectiveProfit: {
    color: globalStyles.colors.green500,
    fontWeight: "600",
    fontSize: 13,
  },
  objectiveLost: {
    color: globalStyles.colors.red500,
    fontWeight: "600",
    fontSize: 13,
  },
  tjournalContainer: {
    backgroundColor: "#000",
    position: "relative",
    width: "100%",
    borderRadius: 12,
    height: "100%",
  },
  addTsection: {
    backgroundColor: globalStyles.colors.slate800,
    padding: 8,
    borderRadius: 6,
    gap: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  addText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  tradeDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    width: "100%",
    padding: 5,
  },
  detailsText: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: 13,
  },
});
