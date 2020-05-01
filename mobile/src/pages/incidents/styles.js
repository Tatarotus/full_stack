import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: Constants.statusBarHeight
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 7,
    paddingVertical: 10,
    marginHorizontal: -10,
    backgroundColor: "#d2d4d6",
    elevation: 2
  },
  logoContainer: {
    width: "20%"
  },
  logo: {
    width: "100%",
    height: 100
  },
  headerText: {
    fontSize: 16,
    color: "#737380"
  },
  headerTextBold: {
    fontWeight: "bold"
  },
  incident: {
    position: "relative",
    width: "90%",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 16
  },
  detailBtn: {
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    fontFamily: "monospace",
    backgroundColor: "#364f6b",
    left: 0,
    bottom: 0,
    fontWeight: "bold",
    borderBottomLeftRadius: 10,
    padding: 10,
    alignItems: "center"
  },
  detailBtnTxt: {
    color: "#fff",
    marginLeft: 10
  },
  ongName: {
    textDecorationLine: "underline",
    fontFamily: "School Bell",
    textAlign: "center",
    fontSize: 24,
    marginTop: 5,
    marginBottom: 10
  },
  caseTitle: {
    width: "100%",
    fontFamily: "monospace",
    flexShrink: 1,
    marginBottom: 38
  },
  caseValue: {
    position: "absolute",
    color: "#fff",
    fontFamily: "monospace",
    backgroundColor: "#e23e57",
    elevation: 10,
    right: 0,
    bottom: 0,
    fontWeight: "bold",
    borderBottomRightRadius: 10,
    padding: 10
  }
});
