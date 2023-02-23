import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.COLORS.BLUE,
      },
      wrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      },
      Input: {
        width: "80%",
        height: 50,
        marginBottom: 12,
        borderRadius: 8,
        paddingHorizontal: 14,
        backgroundColor: "#fff",
      },
      text: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 14,
      },
      smallText: {
        color: "#fff",
        marginTop: 10,
        marginBottom: 30,
        fontSize: 14,
        fontWeight: "600",
      },
      image: {
        marginBottom: 20,
        marginTop: 20,
        width: 300,
      },
      button: {
        width: "80%",
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 8,
        elevation: 3,
        backgroundColor: "#364FC7",
      },
      footer: {
        justifyContent: "space-between",
        flexDirection: "row",
      },
    });