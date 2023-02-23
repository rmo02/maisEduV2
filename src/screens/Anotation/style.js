import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
  },
  card: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 160,
    backgroundColor: "white",
    marginBottom: 15,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
  },
  tag: {
    flexWrap: "wrap",
    bottom: 0,
    marginLeft: 20,
    marginBottom: 10,
    position: "absolute",
    flexDirection: "row",
    width: "80%",
  },
  tagname: {
    margin: 3,
    fontSize: 14,
  },
  fab: {
    backgroundColor: theme.COLORS.TEXT,
    borderRadius: 50,
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  textAnotation: {
    fontFamily: theme.FONT_FAMILY.MEDIUM,
    fontSize: 18,
    color: theme.COLORS.TEXT,
    paddingTop: 20,
    paddingLeft: 20,
  },
  inputSearch:{
    flex: 1,
    height: 40,
    backgroundColor: "white",
    marginHorizontal:20,
    borderRadius: 12,
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  }
});
