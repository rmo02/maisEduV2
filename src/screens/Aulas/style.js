import { StyleSheet } from "react-native";
import theme from "../../theme";


export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
  },
  lista: {
    height:'80%',
    marginTop: 10,
    alignItems: "center",
  },
  title:{
    fontFamily: theme.FONT_FAMILY.MEDIUM,
    fontSize: 18,
    color: theme.COLORS.TEXT,
    paddingTop: 20,
    paddingLeft: 20,
  },
  textSemDisc:{
    fontFamily:theme.FONT_FAMILY.MEDIUM,
     fontSize:16,
      color: "#343A40"
  }
});
