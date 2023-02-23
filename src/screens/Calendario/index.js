import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  RefreshControl,
  KeyboardAvoidingView,
  Animated,
  Platform,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { AppHeader } from "../../components/AppHeader";
import theme from "../../theme";
import { FAB } from "react-native-paper";
import { Agenda } from "../../components/Agenda";
import RBSheet from "react-native-raw-bottom-sheet";
import MaskInput from "react-native-mask-input";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Feather } from "@expo/vector-icons";

import api from "../../api/api";

const windowHeight = Dimensions.get("window").height;

export function Calendario() {
  const refRBSheet = useRef();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [date, setDate] = useState();
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  const [lembretes, setLembretes] = useState([]);
  const [data, setData] = useState("");
  const { userInfo } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  const horaMask = [/\d/, /\d/, ":", /\d/, /\d/];
  const dataMask = [/\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/];
  const limite = 10;

  useEffect(() => {
    getLembrete();
  }, []);

  // timer da atualização da página
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  // atualizar página
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => getLembrete(), setRefreshing(false));
  }, []);

  //post Lembrete
  const postLembrete = async () => {
    try {
      const res = await api.post(`/lembretes`, {
        title: titulo,
        description: descricao,
        data: date,
        start: `${date} ${inicio}`,
        end: `${date} ${fim}`,
        id_aluno: `${userInfo.user.id}`,
      });
      if (res.status === 201) {
        // showToasts();
        setTimeout(() => {
          refRBSheet.current.close();
          onRefresh();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // getLembretes
  const getLembrete = async () => {
    try {
      const res = await api.get(`/lembretesByAluno/${userInfo.user.id}`);
      setLembretes(res.data["lembretes"]);
    } catch (error) {
      throw error;
    }
  };

  // Deletar Lembrete
  const delLembretes = async (id) => {
    try {
      const res = await api.delete(`/lembretes/${id}`);
      if (res.status === 204) {
        // showToastDel();
        setTimeout(() => {
          onRefresh();
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={[styles.shadowProp, styles.calendar]}>
        <Agenda setDate={setDate} lembretes={lembretes} />
      </View>

      {/* Cards Lembretes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getLembrete} />
        }
      >
        <View style={styles.cards}>
          {lembretes.map((avisos) => (
            <View style={styles.card} key={avisos.id}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>{avisos.title}</Text>
                <TouchableOpacity onPress={() => delLembretes(avisos.id)}>
                  <Feather name="x" size={25} color="gray" />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text style={{ color: "#495057", marginLeft: 10 }}>
                  {avisos.description}
                </Text>
                <Text
                  style={{ color: "#3B5BDB", marginLeft: 10, marginTop: 20 }}
                >
                  {avisos.start.slice(11, 16) +
                    " - " +
                    avisos.end.slice(11, 16)}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View>
        {/* BottomSheet */}
        <RBSheet
          ref={refRBSheet}
          height={1000}
          openDuration={250}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            container: {
              backgroundColor: "#F1F3F5",
              borderTopLeftRadius: 28,
              borderTopRightRadius: 28,
              elevation: 30,
            },
            wrapper: {
              backgroundColor: "transparent",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
              {/* Titulo */}
              <Text style={styles.textBottom}>Título</Text>
              <View style={{ marginTop: 10, marginBottom: 10 }}>
                <TextInput
                  style={styles.Input}
                  value={titulo}
                  placeholder="Digite um título"
                  onChangeText={(text) => setTitulo(text)}
                />
              </View>
              {/* Descricao */}
              <Text style={styles.textBottom}>Descrição</Text>
              <View style={{ marginTop: 10, marginBottom: 10 }}>
                <TextInput
                  maxLength={30}
                  style={styles.Input}
                  value={descricao}
                  placeholder="Digite uma descrição"
                  onChangeText={(text) => setDescricao(text)}
                />
              </View>
              {/* data */}
              <Text style={styles.textBottom}>Data</Text>
              <View style={{ marginTop: 10 }}>
                <MaskInput
                  placeholder="Data do evento"
                  mask={dataMask}
                  keyboardType="decimal-pad"
                  style={styles.InputData}
                  value={date}
                  onChangeText={(text) => setDate(text)}
                />
              </View>

              {/* Inicio e fim */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.textBottom}>Início</Text>
                <View>
                  <Text style={styles.textBottom}>Fim</Text>
                </View>
                <Text></Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginRight: 20,
                }}
              >
                <MaskInput
                  keyboardType="decimal-pad"
                  placeholder="Inicio do evento"
                  style={styles.Input2}
                  value={inicio}
                  mask={horaMask}
                  enablesReturnKeyAutomatically
                  onChangeText={(masked) => {
                    setInicio(masked);
                  }}
                />
                <MaskInput
                  keyboardType="decimal-pad"
                  placeholder="Fim do evento"
                  style={styles.Input3}
                  value={fim}
                  mask={horaMask}
                  enablesReturnKeyAutomatically
                  onChangeText={(masked) => {
                    setFim(masked);
                  }}
                />
              </View>

              {/* Buttons */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <TouchableOpacity
                  style={styles.buttomTouchCancel}
                  onPress={() => refRBSheet.current.close()}
                >
                  <Text
                    style={{
                      color: "#343A40",
                      fontSize: 16,
                      fontFamily: theme.FONT_FAMILY.MEDIUM,
                    }}
                  >
                    Cancelar
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => postLembrete()}
                  style={styles.buttomTouchConfirm}
                >
                  <Text
                    style={{
                      color: "#f2f2f2",
                      fontSize: 16,
                      fontFamily: theme.FONT_FAMILY.MEDIUM,
                    }}
                  >
                    Confirmar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </RBSheet>
      </View>
      <FAB
        icon="plus"
        color="white"
        style={styles.fab}
        onPress={() => refRBSheet.current.open()}
      />
    </View>
  );
}
