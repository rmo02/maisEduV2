import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 5,
  },
  ContainerButtons: {
    padding: 10,
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#fff",
  },
  containerDuvidas: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
    marginLeft: 3,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  textDuvidas: {
    color: "#343A40",
    fontWeight: "400",
    fontSize: 11,
    fontFamily: theme.FONT_FAMILY.MEDIUM,
  },
  buttonAnotation: {
    backgroundColor: "#EFF0F0",
    height: 35,
    width: 120,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  containerAnotation: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  textAnotacao: {
    color: "#343A40",
    fontWeight: "400",
    fontSize: 11,
    fontFamily: theme.FONT_FAMILY.MEDIUM,
  },
  buttonfav: {
    backgroundColor: "#EFF0F0",
    height: 35,
    width: 110,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  containerFav: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  titleFav: {
    color: "#343A40",
    fontWeight: "400",
    fontSize: 11,
    fontFamily: theme.FONT_FAMILY.MEDIUM,
  },
});