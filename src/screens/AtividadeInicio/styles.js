import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  titleAtividade: {
    color: "#EEBC4E",
    fontFamily: theme.FONT_FAMILY.BOLD,
    fontSize: 28,
    textAlign: "center",
    paddingHorizontal: 15,
  },
  caroselImg: {
    resizeMode: "contain",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  containerButton: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonAtividade: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 50,
    shadowColor: "#fff",
    shadowOffset: {
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 2,
    backfaceVisibility: "hidden",
  },
  textBnt:{
    color: "#403B91",
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
  }
});
