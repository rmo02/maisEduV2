import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
("react-native");
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { AppHeader2 } from "../../components/AppHeader2";
import api from "../../api/api";
import { styles } from "./styles";

export function TrocarSenha(){
    const { logout } = useContext(AuthContext);
    const navigation = useNavigation();
    const { userInfo } = useContext(AuthContext);
    const [atual, setAtual] = useState();
    const [novaSenha, setNovaSenha] = useState();
    const [novaSenha1, setNovaSenha1] = useState();
    //id para trocar senha do aluno
    let id = userInfo.user.id_senha;

      //função para mudar senha do aluno
  const mudarSenha = async () => {
    if (atual.length != 0 || novaSenha === novaSenha1){
      try {
        const response = await api.put(
          `/escolas/users/change_password`,
          {
            actual_password: atual,
            new_password: novaSenha1,
            id_user: `${id}`,
          }
        );
        if (response.status === 200) {
          logout();
        }
      } catch (error) {
        throw error;
      }
    }     
  };

    return (
        <View styles={styles.container}>
        <AppHeader2 />

        <View>
        <Text
          style={styles.title}
        >
          Senha
        </Text>
        </View>

        <ScrollView>
        <View>
          <Text
            style={styles.textSenhaAtual}
          >
            Senha atual
          </Text>
          <View style={{ paddingHorizontal: 20 }}>

            <TextInput
            value={atual}
            onChangeText={(text) => setAtual(text)}
            secureTextEntry
            keyboardType="visible-password"
            placeholder="**************"
            style={styles.input}
          />

          

          </View>
        </View>
        <View>
          <Text
            style={styles.textSenhaAtual}
          >
            Nova senha
          </Text>
          <View style={{ paddingHorizontal: 20 }}>
            <TextInput
            value={novaSenha}
            onChangeText={(text) => setNovaSenha(text)}
            secureTextEntry
            keyboardType="visible-password"
            placeholder="**************"
            style={styles.input}
          />

          </View>
        </View>
        <View>
          <Text
            style={styles.textSenhaAtual}
          >
            Confirmar nova senha
          </Text>
          <View style={{ paddingHorizontal: 20 }}>
            <TextInput
            value={novaSenha1}
            onChangeText={(text) => setNovaSenha1(text)}
            secureTextEntry
            keyboardType="visible-password"
            placeholder="**************"
            style={styles.input}
          />
 
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={styles.btnCancelar}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.textBtn}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnConfirmar}
            onPress={() => mudarSenha()}
          >
            <Text style={{ color: "#fff" }}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

        </View>
    )
}