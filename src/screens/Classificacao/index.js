import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  LogBox,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AppHeader2 } from "../../components/AppHeader2";
import { Image as Image1 } from "react-native-expo-image-cache";
import api from "../../api/api";
import { styles } from "./styles";
import { AuthContext } from "../../context/AuthContext";

const windowHeight = Dimensions.get("window").height;

LogBox.ignoreAllLogs();

export function Classificacao() {
  const [finalRank, setFinalRank] = useState([]);
  const { userInfo } = useContext(AuthContext);
  const [choice, setChoice] = useState("escola");
  const [rank, setRank] = useState([]);
  const [position, setPosition] = useState(0);
  const [points, setPoints] = useState([]);
  const [clicked, setClicked] = useState(0);

  const getRank = async () => {
    try {
      const response = await api.get(`/ranks/${userInfo.user.id}`);
      setRank(response.data[choice]);
      setPoints(response.data["points"]);
      console.log("oiiii", response.data);
    } catch (error) {
      throw error;
    }
  };

  //get no rank do aluno
  useEffect(() => {
    getRank();
  }, [choice]);

  //opções do tipos de ranks
  const detailsTabs = [
    { id: 1, label: "escola" },
    { id: 2, label: "serie" },
    { id: 3, label: "turma" },
  ];
  const handleClick = (id, item) => {
    setClicked(id);
    setPosition(rank[choice]);
    setChoice(item);
    setFinalRank(rank[choice]);
  };

  //menu dos ranks
  const renderTabsRanking = () => {
    return (
      <View style={styles.renderTabs}>
        {detailsTabs.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={(i) => handleClick(index, item.label)}
              style={[
                index === clicked ? styles.buttonTabsActive : styles.buttonTabs,
              ]}
            >
              <Text style={styles.textItem}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View styles={styles.container}>
      <AppHeader2 />

      <View>
        <Text style={styles.title}>Classificação</Text>
      </View>

      <View style={{ alignItems: "center", marginBottom: 20 }}>
        {renderTabsRanking()}
      </View>

      <View style={{ paddingHorizontal: 20, height: "100%" }}>
        <View
          style={styles.containerBanner}
        >
          <View
            style={styles.faixa}
          >
            <Text
              style={styles.textTop3}
            >
              Top 3 Alunos
            </Text>
          </View>
          {rank.length != 0 ? (
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                justifyContent: "center",
              }}
            >
              {rank.map((ranks, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: 80,
                    }}
                  >
                    {index < 3 && (
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          padding: 10,
                          alignItems: "center",
                        }}
                      >
                        <Image1
                          style={{ height: 50, width: 50 }}
                          resizeMode="contain"
                          uri={`${ranks.img}`}
                        />
                        <Text
                          style={styles.textRankName}
                        >
                          {ranks.name}
                        </Text>
                        <Text
                        style={styles.textPoints}
                        >
                          {ranks.points}
                        </Text>
                      </View>
                    )}
                    {ranks.my_position && (
                      <View
                        style={styles.bannerMyposition}
                      >
                        <View style={{ alignItems: "center", paddingTop: 10 }}>
                          <Text style={{ color: "#fff" }}>
                            Minha Pontuação: {points}
                          </Text>
                        </View>

                        {ranks.my_position == 1 ? (
                          <View
                            style={{
                              paddingHorizontal: 10,
                              paddingVertical: 20,
                              flexDirection: "row",
                            }}
                          >
                            <Image
                              style={{ height: 60, width: 60 }}
                              resizeMode="contain"
                              source={require("../../../assets/ouro.png")}
                            />
                            <View
                              style={{
                                flexDirection: "column",
                                paddingLeft: 10,
                              }}
                            >
                              <Text
                                style={{ fontWeight: "bold", color: "#fff" }}
                              >
                                Parabéns!!
                              </Text>
                              <Text style={{ color: "#fff" }}>
                                Voce está em primeiro lugar!
                              </Text>
                            </View>
                          </View>
                        ) : ranks.my_position === 2 ? (
                          <View
                            style={{
                              paddingHorizontal: 10,
                              paddingVertical: 10,
                              flexDirection: "row",
                            }}
                          >
                            <Image
                              style={{ height: 60, width: 60 }}
                              resizeMode="contain"
                              source={require("../../../assets/prata.png")}
                            />
                            <View
                              style={{
                                flexDirection: "column",
                                paddingLeft: 10,
                              }}
                            >
                              <Text
                                style={{ fontWeight: "bold", color: "#fff" }}
                              >
                                Parabéns!!
                              </Text>
                              <Text style={{ color: "#fff" }}>
                                Voce está em segundo lugar!
                              </Text>
                            </View>
                          </View>
                        ) : ranks.my_position === 3 ? (
                          <View
                            style={{
                              paddingHorizontal: 10,
                              paddingVertical: 10,
                              flexDirection: "row",
                            }}
                          >
                            <Image
                              style={{ height: 60, width: 70 }}
                              resizeMode="contain"
                              source={require("../../../assets/bronze.png")}
                            />
                            <View
                              style={{
                                flexDirection: "column",
                                paddingLeft: 10,
                              }}
                            >
                              <Text
                                style={{ fontWeight: "bold", color: "#fff" }}
                              >
                                Parabéns!!
                              </Text>
                              <Text style={{ color: "#fff" }}>
                                Voce está em terceiro lugar!
                              </Text>
                            </View>
                          </View>
                        ) : (
                          <View
                            style={{
                              paddingHorizontal: 10,
                              paddingVertical: 10,
                              flexDirection: "row",
                            }}
                          >
                            <View
                              style={{
                                flexDirection: "column",
                                paddingLeft: 10,
                              }}
                            >
                              <Text style={{ color: "#fff" }}>
                                Voce está na {ranks.my_position} lugar!
                              </Text>
                            </View>
                          </View>
                        )}
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={styles.textSemrank}>
                Não exite rank no momento
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
