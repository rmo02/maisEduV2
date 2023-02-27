import { Dimensions, StyleSheet } from "react-native";
import theme from "../../theme";

const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF2FF",
  },
  renderTabs: {
    width: "100%",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  textItem: {
    fontSize: 16,
    color: theme.COLORS.TEXT,
    fontFamily: theme.FONT_FAMILY.MEDIUM,
  },
  title: {
    fontFamily: theme.FONT_FAMILY.MEDIUM,
    fontSize: 16,
    color: theme.COLORS.TEXT,
    paddingTop: 20,
    paddingLeft: 20,
  },
  buttonTabsActive: {
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#4162EB",
  },
  buttonTabs: {
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#2F598431",
  },
  containerBanner: {
    height: windowHeight * 0.5,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 28,
    elevation: 4,
    position: "relative",
  },
  faixa: {
    backgroundColor: "#EEBC4E",
    height: 50,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textTop3: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: theme.FONT_FAMILY.MEDIUM,
  },
  textRankName: {
    color: theme.COLORS.TEXT,
    fontSize: 16,
    fontFamily: theme.FONT_FAMILY.MEDIUM,
  },
  textPoints: {
    color: theme.COLORS.TEXT,
    fontSize: 14,
    fontFamily: theme.FONT_FAMILY.MEDIUM,
  },
  bannerMyposition: {
    width: "100%",
    backgroundColor: "#4263EB",
    height: windowHeight * 0.18,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  textSemrank:{
    fontFamily: theme.FONT_FAMILY.MEDIUM,
    fontSize: 16
  }
});
