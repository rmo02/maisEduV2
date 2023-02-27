import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF2FF",
  },
  title: {
    fontFamily: theme.FONT_FAMILY.MEDIUM,
    fontSize: 18,
    color: theme.COLORS.TEXT,
    paddingTop: 20,
    paddingLeft: 20,
  },
  containerAvatar: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "20%",
    marginTop: 20,
  },
  textAvatar: {
    fontFamily: theme.FONT_FAMILY.MEDIUM,
    fontSize: 14,
    marginBottom: 10,
    color: theme.COLORS.TEXT,
    marginTop: 10,
  },
  textSenha: {
    fontFamily: theme.FONT_FAMILY.MEDIUM,
    fontSize: 16,
    color: theme.COLORS.TEXT,
    paddingLeft: 20,
  },
  btnSenha: {
    marginHorizontal: 6,
    marginTop: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 0,
    backgroundColor: "#fff",
  },
  inputBtn: {
    color: "#343A40",
    fontFamily: theme.FONT_FAMILY.MEDIUM,
  },
  btnLogout: {
    alignItems: "center",
    marginHorizontal: 6,
    marginTop: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 0,
    backgroundColor: "#EBC942",
  },
  textGeral: {
    fontFamily: theme.FONT_FAMILY.MEDIUM,
    fontSize: 16,
    color: theme.COLORS.TEXT,
  },
  btnReport: {
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 0,
    backgroundColor: "#00B7B7",
  },
  btnNotifi:{
    marginTop: 5,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 0,
    backgroundColor: "#00B7B7",
  },
  containerNotifi:{
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    padding: 5,
  },
  textPrivacidade: {
    fontFamily: theme.FONT_FAMILY.MEDIUM,
    fontSize: 16,
    color: theme.COLORS.TEXT,
    paddingLeft:20
  },
  btnTermos:{
    alignItems: "center",
    marginTop: 5,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 0,
    backgroundColor: "#00B7B7",
  },
  btnPrivacidade:{
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 0,
    backgroundColor: "#00B7B7",
  },
  btnLogoutAndroid:{
    alignItems: "center",
    marginTop: 5,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 0,
    backgroundColor: "#EBC942", 
  },
  btnNotifiAndroid:{
    marginTop:5,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 12,
    elevation: 0,
    backgroundColor: "#00B7B7",
  }, 
  btnTermos:{
    alignItems: "center",
    marginTop: 5,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: "#00B7B7",
  }, 
  btnPrivacidadeAndroid:{
    alignItems: "center",
    marginHorizontal: 6,
    marginTop: 5,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 0,
    backgroundColor: "#00B7B7",
  }
});