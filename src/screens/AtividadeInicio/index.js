import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./styles";

export function AtividadeInicio({ route }) {
  //id da ativiade
  let id = route.params.id;
  //titulo da atividade
  let title = route.params.title;
  let id_disciplina = route.params.id_disciplina;
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <ImageBackground
        source={require("../../../assets/BG.png")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Text style={styles.titleAtividade}>{title}</Text>
        </View>
        {/* Instruções sobre a atividade */}
        <View style={{ height: "60%" }}>
          <ImageSlider
            data={[
              { img: require("../../../assets/intro.png") },
              { img: require("../../../assets/introo.png") },
              { img: require("../../../assets/introoo.png") },
              { img: require("../../../assets/introooo.png") },
            ]}
            localImg
            caroselImageStyle={styles.caroselImg}
            autoPlay={true}
            timer={2500}
            preview={false}
            showIndicator={false}
          />
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.buttonAtividade}
            onPress={() =>
              navigation.navigate("Atividade", {
                id: `${id}`,
                id_disciplina: `${id_disciplina}`,
              })
            }
          >
            <Text style={styles.textBnt}>Iniciar Quiz</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
