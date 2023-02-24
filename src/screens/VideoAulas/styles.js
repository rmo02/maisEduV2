import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#EDF2FF",
  },
  videos: {
    width: "100%",
    height: 55,
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 5,
    marginHorizontal: 20,
  },
  videos2: {
    width: "150%",
    height: 60,
    paddingVertical: 2.5,
    flexDirection: "row",
    alignItems: "flex-start",

    paddingHorizontal: 20,
    backgroundColor: "#D1DEFE",
  },
  title: {
    paddingVertical: 5,
    textAlignVertical: "top",
    color: "#343A40",
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: 13,
  },
  titleVideo: {
    color: theme.COLORS.TEXT,
    fontFamily: theme.FONT_FAMILY.MEDIUM,
    fontSize: 18,
  },
  titleConteudo: {
    color: "#343434",
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: 14,
  },
  containerImage: {
    height: 30,
    width: 30,
    borderRadius: 50,
    marginRight: 5,
  },
  containerInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 20,
  },
  titleProfessor: {
    color: "#343434",
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
});
