import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { styles } from "./style";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api/api";
import { AppHeader } from "../../components/AppHeader";
import theme from "../../theme";

export function Home() {
  //   const { userInfo } = useContext(AuthContext);
    const [fav, setFav] = useState([]);
    const [aulas, setAulas] = useState([]);
  //   const navigation = useNavigation();
    const limite = 30;

  //   // get nos favoritos
  //   const getFav = async () => {
  //     try {
  //       const res = await api.get(`/favoritos/${userInfo.user.id}`);
  //       setFav(res.data["favoritos"]);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   // get nas ultimas aulas
  //   const getAulas = async () => {
  //     try {
  //       const res = await api.get(`/ultimasAulas/${userInfo.user.id}`);
  //       setAulas(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     getFav();
  //     getAulas();
  //   }, []);

  return (
    <View style={styles.Container}>
      <AppHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.bannerBox}>
          <Image
            style={styles.bannerAula}
            resizeMode="contain"
            source={require("../../../assets/banner.png")}
          />
          <Image
            style={styles.banner2}
            resizeMode="contain"
            source={require("../../../assets/banner2.png")}
          />
        </View>
        <View style={styles.aulasVideos}>
          <Text
            style={styles.textFav}
          >
            Favoritos
          </Text>
        </View>
        <View>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={fav}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) => (
              <View style={styles.Image}>
                <TouchableOpacity
                  // onPress={() =>
                  //   navigation.navigate("VideoAulas", {
                  //     id: `${item.conteudo}`,
                  //     file: `${item.file}`,
                  //     title: `${item.title}`
                  //   })
                  // }
                >
                  <Image
                    source={{ uri: `${item.thumb}` }}
                    style={{ width: 160, height: 90, borderRadius: 10 }}
                  />
                  <View style={{alignSelf:'flex-start', justifyContent:'flex-start'}}>
                  <Text
                  style={{
                    fontFamily: theme.FONT_FAMILY.MEDIUM,
                    fontSize: 12,
                    color: "#1F1A14",
                  }}
                >
                  {item.title.length > limite
                    ? item.title.substring(0, limite) + "..."
                    : item.title}
                </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View style={styles.aulasVideos}>
          <Text
            style={styles.textFav}
          >
            Últimas aulas
          </Text>
        </View>

        <View style={{ marginBottom: 20 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={aulas}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) => (
              <View style={styles.Image}>
                <TouchableOpacity
                  // onPress={() =>
                  //   navigation.navigate("VideoAulas", {
                  //     id: `${item.conteudo}`,
                  //     file: `${item.file}`,
                  //     title: `${item.title}`
                  //   })
                  // }
                >
                  <Image
                    source={{ uri: `${item.thumb}` }}
                    style={{ width: 160, height: 90, borderRadius: 10 }}
                  />
                  <Text
                    style={{
                      fontFamily: theme.FONT_FAMILY.MEDIUM,
                      fontSize: 12,
                      color: "#1F1A14",
                    }}
                  >
                    {item.title.length > limite
                      ? item.title.substring(0, limite) + "..."
                      : item.title}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
