import { Dimensions, StyleSheet } from "react-native";
import theme from "../../theme";

const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
  },
  fab: {
    backgroundColor: theme.COLORS.TEXT,
    borderRadius: 50,
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  Input: {
    width: "95%",
    height: 50,
    marginBottom: 12,
    borderRadius: 8,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
  },
  InputData: {
    width: "50%",
    height: 50,
    marginBottom: 12,
    borderRadius: 8,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
  },
  Input2: {
    width: "50%",
    height: 50,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginRight: 20,
    paddingLeft: 10,
  },
  Input3: {
    width: "50%",
    height: 50,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    paddingLeft: 10,
  },
  card: {
    width: "90%",
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 120,
    backgroundColor: "white",
    marginBottom: 15,
    borderRadius: 10,
    elevation: 2,
  },
  text: {
    color: "#748FFC",
    margin: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  calendar: {
    height: 380,
    backgroundColor: theme.COLORS.TEXT,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    shadowColor: "#000",
    elevation: 2,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cards: {
    alignItems: "center",
    height: windowHeight,
  },
  textBottom: {
    color: theme.COLORS.TEXT,
     fontSize: 18,
      fontFamily: theme.FONT_FAMILY.MEDIUM
  },
  buttomTouchConfirm:{
    width: "48%",
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 0,
    backgroundColor: theme.COLORS.TEXT,
  }, buttomTouchCancel:{
    width: "48%",
    alignItems: "center",
    marginRight: 5,
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 0,
    backgroundColor: "#D1DEFE",
  }
});
