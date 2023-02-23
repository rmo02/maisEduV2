import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
  },
  text: {
    color: theme.COLORS.ROXO,
    fontSize: 18,
    fontWeight: "500",
  },
  bannerAula: {
    height: 200,
  },

  bannerBox: {
    paddingHorizontal: 12,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.COLORS.BLUE,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  banner2: {
    height: 130,
  },
  aulasVideos: {
    marginHorizontal:20,
    marginVertical:10
  },
  Image: {
    flexDirection: "row",
    marginLeft: 25,
    width: 160,
  },
  textFav:{
    fontFamily: theme.FONT_FAMILY.MEDIUM,
     fontSize: 18,
     color: theme.COLORS.TEXT
  }
});
