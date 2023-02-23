import React, { useEffect, useContext, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Animated,
    Image, 
    FlatList} from "react-native";
import { styles } from "./style";
import { AppHeader } from "../../components/AppHeader";
import api from "../../api/api";
import { AuthContext } from "../../context/AuthContext";
import theme from "../../theme";

export function Conquistas() {
    const [conquistas, setConquistas] = useState([]);
    // const { userInfo } = useContext(AuthContext);
  
    const getConquistas = async () => {
      try {
        const res = await api.get(
          `/escolas/users/alunos/${userInfo.user.id}/conquistas`
        );
        setConquistas(res.data["conquistas"]);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getConquistas();
    }, []);

    return (
        <View style={styles.Container}>
            <AppHeader />
            <View style={{ marginBottom: 10 }}>
        <Text
          style={styles.title}
        >
          Conquistas
        </Text>

        <ScrollView>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
        {
          conquistas.length != 0 
          ?             conquistas.map((conq, i) => {
            return (
              <View key={i} style={styles.card}>
                <View
                  style={{
                    flexDirection: "row",
                    width: "80%",
                    justifyContent: "flex-start",
                    marginHorizontal: 10,
                    marginTop:5,
                    marginBottom:10
                  }}
                >
                  <View style={{ height: 100, width: 90 }}>
                    <Image
                      style={{ height: "100%", width: "100%" }}
                      resizeMode="contain"
                      source={{
                      uri: `${conq.conquista.icon}`
                    }}
                    />
                  </View>

                  <View
                    style={{
                      marginLeft: 10,
                      flexDirection: "column",
                      width: "87%",
                    }}
                  >
                    <View style={{ width: "90%" }}>
                      <Text style={{ fontFamily: "Medium", fontSize: 16 }}>
                        {conq.conquista.name}
                      </Text>
                    </View>
                    <Text style={{ fontFamily: "Regular", fontSize: 13 }}>
                      {conq.conquista.description}
                    </Text>
                    {
                      conq.conquista.progress != 0 
                      ? 
                      <View style={{ marginTop: 10, width: "87%", backgroundColor:conq.conquista.color + 30, borderRadius:20 }}>
                      <Animated.View
                      Value={conq.conquista.progress}
                      inputRange={[0,100]}
                      outputRange= {['0%','100%']}
                        style={[
                          {
                            height: 20,
                            borderRadius: 20,
                            backgroundColor:`${conq.conquista.color}` ,
                            alignItems: "center",
                          },
                          {
                            width: conq.conquista.progress * 2,
                           
                          },
                        ]}
                      >
                        <Text style={{ color: "#fff" }}>{conq.conquista.progress}%</Text>
                      </Animated.View>
                    </View>
                    :
                    <View style={{ marginTop: 10, width: "90%" }}>
                      <Animated.View
                      Value={conq.conquista.progress}
                      inputRange={[0,]}
                      outputRange= {['0%','100%']}
                        style={[
                          {
                            height: 20,
                            borderRadius: 20,
                            backgroundColor:'grey',
                            alignItems: "center",
                          },
                          {
                            width: 190,
                           
                          },
                        ]}
                      >
                        <Text style={{ color: "#fff" }}>0%</Text>
                      </Animated.View>
                    </View>
                    }
                  </View>
                </View>
              </View>
            );
          })
          : 
          <View style={styles.containerText}>
            <Text style={styles.textSemConq}>Não existem conquistas desbloqueadas</Text>
          </View>
        }
        </View>
      </ScrollView>

      </View>
        </View>
    )
}