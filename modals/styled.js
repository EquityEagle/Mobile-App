import { StyleSheet } from "react-native";

export const StyledActionModal = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    width: "100%",
    padding: 16,
    borderTopRightRadius: 19,
    borderTopLeftRadius: 13,
    position: "relative",
    height: "auto",
    gap: 10,
    // For Android
    elevation: 8,
    // For iOS
    shadowColor: "rgb(100 116 139)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  removeContainer: {
    position: "relative",
    width: "100%",
  },
  removeIcon: {
    width: 50,
    padding: 2,
    backgroundColor: "#fff",
    height: 5,
    top: 5,
    borderRadius: 5,
    position: "absolute",
    left: "40%",
  },
  closeText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
