import { ScrollView, View, Text } from "react-native";
import { styles } from "./styles";
import { AppHeader2 } from "../../components/AppHeader2";
import api from "../../api/api";
import { AuthContext } from "../../context/AuthContext";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import { useContext, useEffect, useState } from "react";

export function MinhasNotas () {
 //get dados do aluno - notas
 const { userInfo } = useContext(AuthContext);
 const [data, setData] = useState([]);

 //get nas notas dos alunos
 const getNotas = async () => {
   try {
     const response = await api.get(
       `/medias/${userInfo.user.id}`
     );
     setData(response.data["medias"]);
   }
    catch (error) {
     console.log(error);
   }
 }

 //get nas notas dos alunos
 useEffect(() => {
   getNotas();
 }, []);

    return (
        <View style={styles.container}>
            <AppHeader2 />
            <ScrollView>
            <View style={{ padding: 15 }}>
              <View style={styles.header}>
                <Text
                  style={styles.textNotas}
                >
                  Minhas Notas
                </Text>
              </View>
              <View style={styles.infoMaterias}>
                <View style={styles.boxInfo}>
                  <Text style={styles.subTitle}>Melhor matéria: </Text>
                  <Text style={styles.infoText}>Matemática</Text>
                </View>
                <View style={styles.boxInfo}>
                  <Text style={styles.subTitle}>Tempo em atividade: </Text>
                  <Text style={styles.infoText}>1 H 27 minutos</Text>
                </View>
                <View style={styles.boxInfo}>
                  <Text style={styles.subTitle}>Tempo em Aula: </Text>
                  <Text style={styles.infoText}>3H 13 minutos</Text>
                </View>
              </View>
              <View style={styles.boxGrafico}>
                  {
                    data.length != 0 ? 
                    <VictoryChart
                    theme={VictoryTheme.material}
                    animate={{ duration: 500 }}
                  >
                    <VictoryBar
                      alignment="start"
                      style={{
                        data: {
                          fill: ({ datum }) => (datum.y >= 7 ? "#EBC942" : "#3BA8B9"),
                          fillOpacity: 0.7,
                          strokeWidth: 2,
                        },
                      }}
                      labels={({ datum }) => datum.y}
                      barWidth={40}
                      height={1}
                      data={data}
                      x="disciplina"
                      y="value"
                    />
                  </VictoryChart>
                  : 
                  <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
                      <Text style={styles.textSemNotas}>Não existem médias</Text>
                  </View>
                  }
              </View>
              <View style={styles.boxTable}></View>
               
            </View>
          </ScrollView>
        </View>
    )
}