import React, { useContext, useRef, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Icon4 from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import { AntDesign } from "@expo/vector-icons";
import api from "../../api/api";
import { styles } from "./styles";

const TabsFavoritos = ({
  setFavo,
  id_aula,
  favorite,
  name,
  idProfessor,
  nomeProfessor,
  first_Favo,
  first_idAula
}) => {
  const navigation = useNavigation();
  const [fav, setFav] = useState();
  const { userInfo } = useContext(AuthContext);
  let id = userInfo.user.id;



  //função de favoritar de desfavoritar video
  async function changeFavorito() {
    try {
      const response = await api.post(
        `/favoritos/${id}`,
        {
          id_aula: id_aula === undefined ? first_idAula : id_aula
        }
      );
      if (response.status === 201) {
        setFavo(true);
        setFav(true);
      }
      if (response.status === 204) {
        setFav(false);
        setFavo(false);
      }
    } catch (error) {
      console.log("Deu erro");
    }
  }

  return (
    <View
      style={styles.Container}
    >
      <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal>
      <View
      style={styles.ContainerButtons}
    >
      {/* Ir para página de chat */}
      <TouchableOpacity
      style={{backgroundColor:"#EFF0F0", height:35, width:100, borderRadius:32, alignItems:'center', justifyContent:'center'}}
      onPress={() => navigation.navigate("Chat", {
        idProfessor: `${idProfessor}`,
        nomeProfessor: `${nomeProfessor}`,
      })}
      >
        <View
          style={styles.containerDuvidas}
        >
          <AntDesign
            name="bars"
            size={20}
            color="#343A40"
            style={{ alignItems: "center", marginRight: 3 }}
          />
          <Text style={styles.textDuvidas}>
          Dúvidas
          </Text>
        </View>
      </TouchableOpacity>

      {/* Ir para página de anotação da Aula */}
      <TouchableOpacity
      style={styles.buttonAnotation}
        onPress={() =>
          navigation.navigate("AnotationAula", {
            id: `${id_aula}`,
            name: `${name}`,
          })
        }
      >
        <View
          style={styles.containerAnotation}
        >
          <Icon2
            name="newspaper-outline"
            size={20}
            color="#343A40"
            style={{ alignItems: "center", marginRight: 3 }}
          />
          <Text style={styles.textAnotacao}>
            Anotações
          </Text>
        </View>
      </TouchableOpacity>


      {/* botão de favoritar vídeo*/}
      {favorite  === true || first_Favo === true ? (
        <TouchableOpacity 
        style={styles.buttonfav}
        onPress={() => changeFavorito()}>
          <View
            style={styles.containerFav}
          >
            <Icon4
              name="star"
              size={20}
              color="#343A40"
              style={{ alignItems: "center", marginRight: 3 }}
            />

            <Text
              style={styles.titleFav}
            >
              Favoritos
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
        style={styles.buttonfav}
         onPress={() => changeFavorito()}>
          <View
            style={styles.containerFav}
          >
            <Icon3
              name="star-outline"
              size={20}
              color="#343A40"
              style={{ alignItems: "center", marginRight: 3 }}
            />

            <Text
              style={styles.titleFav}
            >
              Favoritos
            </Text>
          </View>
        </TouchableOpacity>
      )}

    </View>
      </ScrollView>
    </View>
  );
};

export { TabsFavoritos };
