import { Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
    KeyboardAvoidingView,
    TextInput, } from "react-native";
import React, {
        useContext,
        useEffect,
        useState,
        useRef,
        useCallback,
} from "react";
import Tags from "react-native-tags";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import { AppHeader2 } from "../../components/AppHeader2";
import { styles } from "./style";
import api from "../../api/api";

export function EditAnotation({ route }) {
    const navigation = useNavigation();
  const { userInfo } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState();
  let id = route.params.id;

  //função do botaõ de envio da anotação
  const onSubmit = (title) => {
    EditarNota(title);
  };

  //alterando os dados para editar anotação
  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === "title") setTitle(text);
    if (valueFor === "taag") setDesc(text);
  };

  //get da rota de editar a anotação
  useEffect(() => {
    api.get(`/anotacoes/${id}`).then((res) => {
      setTitle(res.data["anotacao"].descricao);
      setTags(res.data["anotacao"].tags);
    });
  }, []);

  //função de editar a anotação
  const EditarNota = async () => {
    try {
      const response = await api.put(
        `/anotacoes/${id}`,
        {
          descricao: title,
          id_aluno: `${userInfo.user.id}`,
          array_tags: tags,
        }
      );
      if (response.status === 200) {
        console.log("Deu certo")
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  };
    return (
        <KeyboardAvoidingView
        style={styles.Container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <AppHeader2 />
        <ScrollView style={{ height: "100%" }}>
          <View>
            <Text style={styles.titleAnotacao}>Editar anotação</Text>
          </View>
          <View
            style={{ paddingHorizontal: 20, paddingVertical: 10, height: "60%" }}
          >
            <TextInput
              multiline={true}
              style={styles.input}
              value={title}
              placeholder="Title"
              onChangeText={(text) => handleOnChangeText(text, "title")}
            />
          </View>
  
          <View style={styles.textbox}>
            <View style={{ marginTop: 5 }}>
              <Text style={styles.textTags}>Tags</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Tags
                key={tags}
                initialTags={tags}
                style={{
                  height: 100,
                  marginTop: 20,
                  fontSize: 14,
                }}
                onChangeTags={(tags) => setTags(tags)}
                onTagPress={(index, tagLabel, event, deleted) =>
                  console.log(
                    index,
                    tagLabel,
                    event,
                    deleted ? "deleted" : "not deleted"
                  )
                }
                containerStyle={{
                  borderRadius: 10,
                  backgroundColor: "#FFFFFF",
                  justifyContent: "flex-start",
                }}
                inputStyle={{
                  backgroundColor: "#FFFFFF",
                  color: "#606060",
                  fontWeight: "bold",
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={styles.buttonCancelar}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Text style={styles.textCancelar}>Cancelar</Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    onSubmit(title);
                }}
              >
                <Text style={styles.textSalvar}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
}