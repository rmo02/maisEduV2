import { useNavigation } from "@react-navigation/native";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
  RefreshControl,
} from "react-native";
import { styles } from "./style";
import api from "../../api/api";
import { AppHeader } from "../../components/AppHeader";
import theme from "../../theme";
import { Feather } from '@expo/vector-icons';
import { FAB } from "react-native-paper";
import { AuthContext } from "../../context/AuthContext";



export function Anotation() {
  const { userInfo } = useContext(AuthContext);
  const navigation = useNavigation();
  const [note, setNote] = useState([]);
  var listaNotes = [];
  const [refreshing, setRefreshing] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText === "") {
      getAnotacoes();
      setNote([]);
    } else {
      setNote(
        note?.filter((item) => {
          if (item.descricao.indexOf(searchText) > -1) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [searchText, refreshing]);

  //timer da duração de atalização
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  //refresh da pagina
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => getAnotacoes(), setRefreshing(false));
  }, []);

  //carregando os lembretes
  const getAnotacoes = async () => {
    try {
      const res = await api.get(`/anotacoesByAluno/${userInfo.user.id}`);
      setNote(res.data["anotacoes"]);
      listaNotes.push(res.data["anotacoes"]);
      handleTags(res.data["anotacoes"].tags);
    } catch (error) {
      throw error;
    }
  };

  //deletando as anotações
  const delAnotacoes = async (id) => {
    try {
      const res = await api.delete(`/anotacoes/${id}`);
      if (res.status === 204) {
        onRefresh();
      }
    } catch (error) {
      setTimeout(() => {
        onRefresh();
      }, 5000);
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader />
      <View>
        <Text
          style={styles.textAnotation}
        >
          Minhas anotações
        </Text>
        <View style={{ flexDirection: "row", alignItems:'center', width:'95%' }}>
          <TextInput
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
          placeholder="Pequisar"
            style={styles.inputSearch}
          />
            <Feather name="search" size={25} color={theme.COLORS.TEXT} />
        </View>
      </View>

      {note?.length === 0 ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 200,
          }}
        >
        <Text style={{fontFamily:theme.FONT_FAMILY.MEDIUM, fontSize:16, color: "#343A40"}}>Não existem anotações</Text>
        </View>
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getAnotacoes} />
          }
        >
          <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            {note.map((notes) => (
              <TouchableOpacity
                key={notes.id}
                onPress={() =>
                  navigation.navigate("EditAnotation", { id: `${notes.id}` })
                }
              >
                <View style={styles.card} key={notes.id}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.text}>{notes.descricao}</Text>
                    <TouchableOpacity onPress={() => delAnotacoes(notes.id)}>
                      <Feather name="x" size={25} color="gray" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.tag}>
                    {notes.tags?.map((tag) => (
                      <Text key={tag.id} style={styles.tagname}>
                        {`#${tag.name}`}
                      </Text>
                    ))}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
        <FAB
        icon="plus"
        color="white"
        style={styles.fab}
        onPress={() => navigation.navigate("CreateAnotation")}
      />
    </View>
  );
}
