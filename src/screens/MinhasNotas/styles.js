import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EDF2FF",
      },
      header: {
        width: "100%",
      },
      infoMaterias: {
        flexDirection: "column",
        width: "100%",
      },
      subTitle: {
        fontSize: 16,
        color: "#343A40",
        fontFamily: theme.FONT_FAMILY.MEDIUM,
      },
      infoText: {
        color: "#343A40",
        fontFamily: theme.FONT_FAMILY.REGULAR,
      },
      boxInfo: {
        flexDirection: "row",
        width: "100%",
        paddingVertical: 5,
        alignItems: "center",
      },
      boxGrafico: {
        width: "100%",
        height: 200,
        alignItems: "center",
      },
      boxTable: {
        width: "100%",
        height: 200,
        padding: 20,
      },
      button: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4263EB",
        padding: 15,
        borderRadius: 10,
      },
      buttonText: {
        color: "#fff",
      },
      textNotas:{
        fontFamily: theme.FONT_FAMILY.MEDIUM,
        color: "#4264EB",
        fontSize: 18,
        fontWeight: "500",
      },
      textSemNotas:{
        fontFamily:theme.FONT_FAMILY.MEDIUM,
         fontSize:16,
          color: "#343A40",
      }
})