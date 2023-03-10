import { StyleSheet } from "react-native";
import theme from "../../theme";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF2FF",
  },
  bannerMoldura: {
    position: "absolute",
    height: 150,
  },
  bannerAvatar: {
    width:92,
    marginTop: 6,
    height: 92,
    borderRadius: 75,
    overflow:'hidden',
    resizeMode:"cover"
  },
  imgBox: {
    position: "relative",
    width: "40%",
  },
  bannerBox: {
    flex: 0.6,
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 25,
    flexDirection: "row",
    backgroundColor: "#4263EB",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    elevation: 0,
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  profile: {
    width: "70%",
    paddingHorizontal: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  name: {
    textAlign: "center",
  },
  nome: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dados1: {
    height: 30,
    width: 195,
    marginRight: 10,
    backgroundColor: "#364FC7",
    borderRadius: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  dados11: {
    marginTop: 5,
    height: 30,
    width: 70,
    marginRight: 10,
    backgroundColor: "#364FC7",
    borderRadius: 28,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  dados2: {
    marginTop: 5,
    height: 30,
    width: 120,
    alignItems: "center",
    marginRight: 5,
    backgroundColor: "#364FC7",
    borderRadius: 28,
    flexDirection: "row",
    justifyContent: "center",
  },
  dados22: {
    marginTop: 5,
    height: 30,
    width: 80,
    backgroundColor: "#00A1A1",
    borderRadius: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: "#00B7B7",
  },
  text: {
    textAlign: "center",
    color: "white",
  },
  containerMoldura:{
    backgroundColor: "#91A7FF",
    width: "100%",
    height: "100%",
    borderRadius: 32,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  textBtn:{
    color: "#343A40",
    fontFamily: theme.FONT_FAMILY.MEDIUM,
    textAlign: "center",
  },
  btn:{
    marginHorizontal: 20,
    marginTop: 5,
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: "#00B7B7",
  }
});
