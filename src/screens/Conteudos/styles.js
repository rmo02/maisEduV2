import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#EDF2FF'
},
text:{
    fontFamily: theme.FONT_FAMILY.MEDIUM,
        fontSize: 18,
        color: "#4264EB",
        paddingTop: 20,
        paddingLeft: 20,
},
container2:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    borderRadius: 12,
    height:40,
    width:"90%",
    marginBottom:10
},
text1:{
    color: "#403B91",
    fontSize: 16,
    fontWeight: "500",
    justifyContent: 'center',
    alignItems: 'center',
    
}
});
