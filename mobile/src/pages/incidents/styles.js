import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logo: {
        width: "20%",
        height: 100
    },
    headerText: {
        fontSize: 16,
        color: "#737380"
    },
    headerTextBold: {
        fontWeight: "bold"
    },
    title: {
        fontSize: 30,
        marginTop: 48,
        marginBottom: 16,
        color: "#13131a",
        fontWeight: "bold"
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: "#737380"
    },
    incidentList: {
        marginTop: 32
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
        marginTop: 10
    },
    ongName: {
        textDecorationLine: "underline",
        fontFamily: "School Bell",
        textAlign: "center",
        fontSize: 24,
        marginTop: 5,
        marginBottom: 10
    },
    caseDescription: {
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
