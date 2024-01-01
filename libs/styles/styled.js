import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

export const styledemailinput = StyleSheet.create({
  emailInput: {
    backgroundColor: " rgb(30 41 59)",
    borderRadius: 8,
    width: "100%",
    position: "relative",
    height: 45,
    color: "#fff",
    fontWeight: "600",
    padding: 10,
  },
  passwordInputContainer: {
    backgroundColor: " rgb(30 41 59)",
    borderRadius: 8,
    width: "100%",
    position: "relative",
    height: 45,
    color: "#fff",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  passwordInput: {
    fontWeight: "600",
    width: "80%",
    color: "#fff",
  },
});

export const styledbtn = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    borderRadius: 9,
    height: 40,
  },
  text: {
    color: "#fff",
    fontWeight: "600",
  },
});

export const styledLoader = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const styledTitle = StyleSheet.create({
  classStyle: {
    color: "#fff",
    backgroundColor: "#000",
    padding: 4,
    borderRadius: 4,
    position: "absolute",
    alignItems: "center",
    fontSize: 12,
    flexDirection: "row",
    top: 33,
    fontWeight: "400",
    zIndex: 90,
    width: "auto",
    elevation: 2, // Adjust the elevation based on your design
    shadowColor: globalStyles.colors.slate500,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
});

export const styledInputL = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 6,
    alignItems: "flex-start",
    position: "relative",
  },
  infoHeader: {
    flexDirection: "row",
    gap: 3,
    alignItems: "center",
    position: "relative",
  },
  infoText: {
    color: "#FFF",
    fontWeight: "500",
  },
  input: {
    backgroundColor: globalStyles.colors.slate800,
    width: "100%",
    color: "#fff",
    borderRadius: 8,
    padding: 10,
    height: 40,
  },
});
