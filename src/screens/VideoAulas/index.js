import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
import { styles } from "./styles";
import { AppHeader2 } from "../../components/AppHeader2";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useContext, useState } from "react";
import { Image as Image1 } from "react-native-expo-image-cache";
import { TabsFavoritos } from '../../components/tabsFavoritos/index'
import { Video } from "expo-av";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api/api";

export function VideoAulas({ route }) {
  //id do conteudo favoritado
  let id = route.params.id;
  //id do video favoritado
  let file = route.params.file;
  //titulo do video favoritado e de ultimas aulas
  let title = route.params.title;

  const navigation = useNavigation();
  const [videos, setVideos] = useState([]);
  const [videoAula, setVideoAula] = useState("");
  const [status, setStatus] = useState({});
  const [firstAula, setFirstAula] = useState("");
  const [corId, setCorId] = useState("");
  const [name, setName] = useState();
  const [nameConteudo, setNameConteudo] = useState("");
  const [idAula, setIdAula] = useState();
  const v = React.useRef(null);
  const { userInfo } = useContext(AuthContext);
  const [idBimestre, setIdBimestre] = useState();
  const [posicaoVideo, setPosicaoVideo] = useState();
  const [favo, setFavo] = useState(false);
  const [idProfessor, setIdProfessor] = useState();
  const [nomeVideo, setNomeVideo] = useState();
  const [nomeProfessor, setNomeProfessor] = useState();
  const [firstVideoTitle, setFirstVideoTitle] = useState("");
  const limite = 50;
  const limiteConteudo = 30;

  //get nos conteudos do vídeo/atividades/materiais
  useEffect(() => {
    if (id) {
      const getVideosContent = async () => {
        const response = await api.get(`/conteudos/${id}/${userInfo.user.id}`);
        setFirstAula(response.data.conteudo["first_aula"]);
        setVideos(response.data.conteudo.array_conteudos);
        setName(response.data["conteudo"]["disciplina"].name);
        setNameConteudo(response.data["conteudo"].name);
        setIdBimestre(response.data["conteudo"].id_bimestre);
        setIdProfessor(response.data["conteudo"].created_by);
        setNomeProfessor(response.data["conteudo"].professor);
        setFirstVideoTitle(response.data.conteudo["first_aula"].title);
      };
      getVideosContent();
    }
  }, [favo]);

  const pauseVideo = (tudo) => {
    if (v) {
      v.current.pauseAsync();
      navigation.navigate("AtividadeInicio", {
        id: `${tudo.atividade.id}`,
        title: `${tudo.atividade.title}`,
        id_disciplina: `${tudo.atividade.id_disciplina}`,
      });
    }
  };

  // função para alterar entre vídeos
  const videoRodando = (tudo) => {
    setFirstAula("");
    setVideoAula(tudo.aula.file);
    setIdAula(tudo.aula.id);
    setCorId(tudo.aula.id);
    setPosicaoVideo(tudo.aula.progress);
    setFavo(tudo.aula.favorite);
    setNomeVideo(tudo.aula.title);
  };

  //renderização de video aulas
  const aulas = (tudo) => {
    return (
      <View style={{}}>
        <TouchableOpacity key={tudo.aula.id} onPress={() => videoRodando(tudo)}>
          <View style={corId == tudo.aula.id ? styles.videos2 : styles.videos}>
            <View style={{ height: 45, width: 80 }}>
              <Image1
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 10,
                  marginVertical: 5,
                }}
                resizeMode="contain"
                uri={`${tudo.aula.thumb}`}
              />
            </View>
            <View style={{ marginLeft: 10, width: 220 }}>
              <Text style={styles.title}>
                {tudo.aula.title.length > limite
                  ? tudo.aula.title.substring(0, limite) + "..."
                  : tudo.aula.title}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  //renderização de atividades
  const atividade = (tudo) => {
    return (
      <View>
        <TouchableOpacity
          key={tudo.atividade.id}
          onPress={() => pauseVideo(tudo)}
        >
          <View style={styles.videos}>
            <View style={{ height: 45, width: 80 }}>
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 10,
                  marginVertical: 5,
                }}
                resizeMode="contain"
                source={require("../../../assets/atividade.png")}
              />
            </View>
            <View style={{ width: 220, marginLeft: 10 }}>
              <Text style={styles.title}>{tudo.atividade.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  //função de post do progresso das aulas
  const postProgresso = async () => {
    try {
      const res = await api.post(`/progressos`, {
        id_aluno: `${userInfo.user.id}`,
        id_aula: idAula === undefined ? firstAula.id : idAula,
        progress: status.positionMillis,
        id_bimestre: idBimestre,
      });
      if (res.status === 201) {
        console.log("Progresso salvo");
      }
    } catch (error) {
      console.log(`Não salvou progresso ${error}`);
    }
  };

  //post acontece quando o video esta parado ou pausado
  if (status.isPlaying == false) {
    postProgresso();
  }

  return (
    <View style={styles.Container}>
      <AppHeader2 />
      <View style={{ height: "30%", backgroundColor: "black", width: "100%" }}>
        {/* player do video */}
        <Video
          style={{ width: "100%", height: "100%" }}
          ref={v}
          shouldPlay={true}
          source={{
            uri: videoAula == "" ? file || firstAula?.file : videoAula,
          }}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          useNativeControls
          positionMillis={
            firstAula?.progress != 0 ? firstAula?.progress : posicaoVideo
          }
          resizeMode="contain"
        />
      </View>
      {/* renderizando videos e atividades na pagina */}
      <ScrollView>
        <View style={{ backgroundColor: "#fff", paddingTop: 10 }}>
          <View style={{ marginHorizontal: 20 }}>
            <Text
              style={styles.titleVideo}
            >
              {nomeVideo === undefined ? title || firstVideoTitle : nomeVideo}
            </Text>
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text
              style={styles.titleConteudo}
            >
              {nameConteudo.length > limiteConteudo
                ? nameConteudo.substring(0, limite) + "..."
                : nameConteudo}
            </Text>
          </View>
          <View
            style={styles.containerInfo}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={styles.containerImage}
              >
                <Image
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="contain"
                  source={require("../../../assets/avatar.png")}
                />
              </View>
              <Text style={styles.titleProfessor}>
                {nomeProfessor}
              </Text>
            </View>
          </View>

          {/* Componente de chat/favoritos/anotações  */}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TabsFavoritos
              idProfessor={idProfessor}
              nomeProfessor={nomeProfessor}
              first_idAula={firstAula?.id}
              first_Favo={firstAula?.favorite}
              id_bimestre={idBimestre}
              id_aula={idAula}
              favorite={favo}
              setFavo={setFavo}
              name={name}
            />
          </View>
        </View>
        {videos?.map((tudo, index) => (
          <View key={index} style={{ alignItems: "flex-start" }}>
            {tudo.atividade ? atividade(tudo) : aulas(tudo)}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
