import { Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView, } from "react-native";
import { styles } from "./styles";
import api from "../../api/api";
import { useNavigation } from "@react-navigation/native";
import { AppHeader2 } from "../../components/AppHeader2";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";


export function Perfil() {
    const navigation = useNavigation();
    const { userInfo } = useContext(AuthContext);
    const [perfil, setPerfil] = useState([]);
    //id do aluno
    let id = userInfo.user.id;
  
    async function getAlunos() {
      try {
        const response = await api.get(`/escolas/users/alunos/${id}`);
        setPerfil(response.data["aluno"]);
        console.log(response.data["aluno"]);
      } catch (error) {
        throw error;
      }
    }
  
    //get nas informações do aluno
    useEffect(() => {
      getAlunos();
    }, []);
    return (
        <View style={styles.container}>
            <AppHeader2 />

            <View style={[styles.bannerBox, styles.shadowProp]}>
            <View style={[styles.imgBox]}>
              <Image
                style={styles.bannerMoldura}
                resizeMode="contain"
                source={require("../../../assets/moldura.png")}
              />
              <View style={{position:'absolute', marginLeft:'27%'}}>
              <Image
              style={styles.bannerAvatar}
              resizeMode="contain"
              source={{uri: perfil.avatar}}
            />
              </View>
    
            </View>
            <View style={styles.profile}>
              <View style={styles.name}>
                <Text style={styles.nome}>{perfil.name}</Text>
              </View>
              <View style={styles.dados1}>
                <Image
                  style={{ width: 10, marginRight: 5 }}
                  resizeMode="contain"
                  source={require("../../../assets/local.png")}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 12,
                    textAlign: "center",
                  }}
                >
                  {perfil.escola_name}
                </Text>
              </View>
    
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.dados2}>
                  <Image
                    style={{ width: 15, marginRight: 5 }}
                    resizeMode="contain"
                    source={require("../../../assets/card.png")}
                  />
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    {perfil.mat}
                  </Text>
                </View>
                <View style={styles.dados11}>
                  <Image
                    style={{ width: 15, marginRight: 5 }}
                    resizeMode="contain"
                    source={require("../../../assets/carteira.png")}
                  />
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    {perfil.turma_name}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.dados22}>
                  <Image
                    style={{ width: 15, marginRight: 5 }}
                    resizeMode="contain"
                    source={require("../../../assets/moeda.png")}
                  />
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 12,
                      textAlign: "center",
                    }}
                  >
                    {perfil.points}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ padding: 20, height: "20%" }}>
          <View
            style={styles.containerMoldura}
          >
            <Image
              style={{ width: 100, marginRight: 10 }}
              resizeMode="contain"
              source={require("../../../assets/molduraPerfil.png")}
            />
            <View>
              <Text style={{ color: "#fff" }}>
                Você está na divisão ouro, {"\n"}faça as atividades e assista{" "}
                {"\n"}aulas para chegar ao {"\n"}Platina!
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "column" }}>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("MinhasNotas");
            }}
          >
            <Text
              style={styles.textBtn}
            >
              Minhas Notas
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Classificacao")}
          >
            <Text
            style={styles.textBtn}
            >
              Classificação
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Configuracao")}
          >
            <Text
            style={styles.textBtn}
            >
              Configuração
            </Text>
          </TouchableOpacity>
        </View>
      </View>
        </View>
    )
}