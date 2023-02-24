import React, { useContext, useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView,Platform, ScrollView} from 'react-native';
import { AuthContext } from "../../context/AuthContext";
import Tags from "react-native-tags";
import { useNavigation } from "@react-navigation/native";
import { AppHeader2 } from "../../components/AppHeader2";
import { styles } from "./styles";
import api from "../../api/api";

export function AnotationAula ({route}){
    id = route.params.id

  const navigation = useNavigation();
  const { userInfo } = useContext(AuthContext);
  const [ descricao, setDescricao ] = useState();
  const [tags, setTags] = useState([route.params.name]);

  //função para envio da criação da anotação
  const onSubmit = (descricao) => {
      criarNota(descricao)
    };
    
    //função do post da anotação
  const criarNota = async() => {
      try {
          const response = await api
          .post(`/anotacoes`, {
              "descricao": descricao,
              "id_aluno": `${userInfo.user.id}`,
              "array_tags": tags
          })
          if(response.status === 201){
            navigation.goBack()
          }
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <KeyboardAvoidingView
      style={styles.Container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <AppHeader2 />
      <ScrollView style={{ height: "100%" }}>
        <View>
          <Text style={styles.titleAnotacao}>Criar anotação</Text>
        </View>
        <View
          style={{ paddingHorizontal: 20, paddingVertical: 10, height: "60%" }}
        >
          <TextInput
            multiline={true}
            style={styles.input}
            placeholder="Digite sua anotação"
            value={descricao}
            onChangeText={(text) => setDescricao(text)}
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
               console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
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
                onSubmit(descricao);
              }}
            >
              <Text style={styles.textSalvar}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}