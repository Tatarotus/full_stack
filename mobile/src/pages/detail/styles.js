import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 20,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#c9d6df"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logoContainer: {
    width: "20%",
  },
  logo: {
    width: "100%",
    height: 100

  },
  headerText: {
    fontSize: 30,
    fontFamily: "School Bell",
    color: "#737380"
  },
  caseDetail: {
    marginTop: 48,
    paddingHorizontal: 10,
    borderRadius: 16,
    paddingVertical: 20,
    backgroundColor: "#fff"
  },
  caseTitle: {
    fontFamily: "School Bell",
    fontSize: 20,
    marginVertical: 10
  },
  caseName: {
    fontFamily: "monospace"
  },
  descriptionTitle: {
    fontFamily: "School Bell",
    fontSize: 20,
    marginVertical: 10
  },
  descriptionName: {
    fontFamily: "monospace"
  },
  valueTitle: {
    fontFamily: "School Bell",
    fontSize: 20,
    marginVertical: 10
  },
  value: {
    fontFamily: "monospace"
  },
  saveDay: {
    fontFamily: "School Bell",
    fontSize: 26,
    textAlign: "center",
    marginVertical: 10
  },
  beTheHero: {
    fontFamily: "School Bell",
    fontSize: 20,
    textAlign: "center"
  },
  ctaBtn: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  whatsapp: {
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: "#364f6b",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1
  },
  whatsappTxt: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 5,
    fontSize: 26
  },
  email: {
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: "#e23e57",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingVertical: 5
  },
  emailTxt: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 26,
    marginLeft: 5,
    paddingVertical: 5
  }
});
