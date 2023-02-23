import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#EDF2FF",
  },
  title:{
    fontFamily: theme.FONT_FAMILY.MEDIUM,
    fontSize: 18,
    color: theme.COLORS.TEXT,
    paddingTop: 20,
    paddingLeft: 20,
  },
  card: {
    flexWrap: "wrap",
    width: "90%",
    height: 140,
    backgroundColor: "white",
    marginBottom: 15,
    borderRadius: 10,
    elevation: 5,
    alignItems:'center'
  },
  text: {
    margin: 10,
    fontSize: 15,
  },
  containerText:{
    flex: 1, alignItems:'center', justifyContent:'center', marginTop: 230, width:'90%'
  },
  textSemConq: {
    fontFamily:theme.FONT_FAMILY.REGULAR,
     fontSize:16,
      textAlign:'center'
  }
});
