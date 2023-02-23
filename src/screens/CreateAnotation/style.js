import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    textAlignVertical: "top",
    height: 450,
    backgroundColor: "white",
    borderRadius: 10,
  },
  button: {
    width: "48%",
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: theme.COLORS.TEXT,
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  textSalvar: {
    textAlign: "center",
    color: "white",
    fontFamily: theme.FONT_FAMILY.MEDIUM,
    fontSize: 16,
  },
  textbox: {
    height: "25%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonCancelar: {
    width: "48%",
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: "#D1DEFE",
    alignItems: "center",
  },
  textCancelar: {
    color: "#343A40",
    fontFamily: theme.FONT_FAMILY.MEDIUM,
    fontSize: 16,
  },
  titleAnotacao: {
    fontFamily: theme.FONT_FAMILY.MEDIUM,
    fontSize: 18,
    color: theme.COLORS.TEXT,
    paddingTop: 20,
    paddingLeft: 20,
  },
  textTags:{
    position: "absolute",
    fontFamily: theme.FONT_FAMILY.MEDIUM,
    fontSize: 18,
    color: theme.COLORS.TEXT,
  }
});
