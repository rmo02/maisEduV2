import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#EDF2FF",
    },
    title:{
        fontFamily: theme.FONT_FAMILY.MEDIUM,
        fontSize: 18,
        color: theme.COLORS.TEXT,
        paddingTop: 20,
        paddingLeft: 20,
    },
    textSenhaAtual:{
        fontFamily: theme.FONT_FAMILY.MEDIUM,
        fontSize: 16,
        color: theme.COLORS.TEXT,
        paddingTop: 20,
        paddingLeft: 30,
    },
    input:{
        backgroundColor: "#FFF",
        borderRadius: 12,
        height: 40,
        paddingHorizontal: 10,
    },
    btnCancelar:{
        width: "43%",
        alignItems: "center",
        marginHorizontal: 6,
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 12,
        elevation: 0,
        backgroundColor: "#D1DEFE", 
    },
    btnConfirmar:{
        width: "43%",
        alignItems: "center",
        marginHorizontal: 6,
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 12,
        elevation: 0,
        backgroundColor: theme.COLORS.BLUE,
    },
    textBtn:{
        color: "#343A40",
         fontFamily:theme.FONT_FAMILY.MEDIUM
    }
})