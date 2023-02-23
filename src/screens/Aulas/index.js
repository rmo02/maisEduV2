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
import { AppHeader } from "../../components/AppHeader";
import { MateriaItem } from "../../components/Materias";
import { AuthContext } from "../../context/AuthContext";
import theme from "../../theme";
import { useContext, useEffect, useState } from "react";
import api from "../../api/api";

export function Aulas() {
  const { userInfo } = useContext(AuthContext);
  const [materias, setMaterias] = useState([]);

  async function getMaterias () {
    try {
      const res = await api.get(`/disciplinasAluno/${userInfo.user.id}`);
      setMaterias(res.data["disciplinas"]);
    } catch (error) {
      throw error;
    }
  }

  //get nas aulas
  useEffect(() => {
    getMaterias();
  }, []);

  return (
    <View style={styles.Container}>
      <AppHeader />

      <View>
        <Text style={styles.title}>Disciplinas</Text>
      </View>

      <View style={styles.lista}>
        {/* Carregando as materias do aluno */}
        {materias.length != 0 ? (
          <FlatList
            data={materias}
            numColumns={2}
            keyExtractor={(materia, index) => index.toString()}
            renderItem={(materia) => (
              <MateriaItem {...materia.item.disciplina} />
            )}
          />
        ) : (
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <Text style={styles.textSemDisc}>Não existem disciplinas</Text>
          </View>
        )}
      </View>
    </View>
  );
}
