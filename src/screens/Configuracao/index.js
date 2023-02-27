import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
  Platform,
  Linking, 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import { useFonts } from "expo-font";
import { AppHeader2 } from "../../components/AppHeader2";
import { styles } from "./styles";

export function Configuracao(){
    const { logout } = useContext(AuthContext);
    const navigation = useNavigation();
    const [notificacao, setNotificacao] = useState(false);
    const toggleSwitch1 = () => setNotificacao((previousState) => !previousState);
  
    const [mute, setMute] = useState(false);
    const toggleSwitch2 = () => setMute((previousState) => !previousState);
  
    const [vibracao, setVibracao] = useState(false);
    const toggleSwitch3 = () => setVibracao((previousState) => !previousState);
    
    let email = 'ramon.oliveira@mirante.com.br';

    return (
        <View styles={styles.container}>
        <AppHeader2 />
        {Platform.OS === "ios" ? (
            <ScrollView style={{marginBottom:100}}>
              <View>
                <Text
                  style={styles.title}
                >
                  Configurações
                </Text>
              </View>
              <View
                style={styles.containerAvatar}
              >
                <Image
                  style={{ width: 100, height: 100 }}
                  resizeMode="contain"
                  source={require("../../../assets/avatarConfig.png")}
                />
                <Text
                  style={styles.textAvatar}
                >
                  Mudar Avatar
                </Text>
              </View>
              <View style={{ marginBottom: 20 }}>
                <Text
                  style={styles.textSenha}
                >
                  Senha
                </Text>
                <View>
                  <TouchableOpacity
                    style={styles.btnSenha}
                    onPress={() => navigation.navigate("TrocarSenha")}
                  >
                    <Text style={styles.inputBtn}>**************</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.btnLogout}
                    onPress={() => {
                      logout();
                    }}
                  >
                    <Text style={styles.inputBtn}>Sair</Text>
                  </TouchableOpacity>
                </View>
              </View>
    
              <View style={{marginLeft:20}}>
              <Text
              style={styles.textGeral}
            >
              Geral
            </Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.btnReport}
                  onPress={() => Linking.openURL(`mailto: ${email}`)}
                >
                  <Text style={styles.inputBtn}>Report bugs</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.btnNotifi}
                  onPress={toggleSwitch1}
                >
                  <View
                    style={styles.containerNotifi}
                  >
                  <View> 
                  <Text style={styles.inputBtn}>Notificações</Text>
                  </View>
                    <Switch
                      style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                      trackColor={{ false: "#58E09A", true: "#004444" }}
                      thumbColor={notificacao ? "#ACE8E8" : "#005858"}
                      onValueChange={toggleSwitch1}
                      value={notificacao}
                      ios_backgroundColor="#ACE8E8"
                    />
                  </View>
                </TouchableOpacity>
              </View>
    
              <View>
                <TouchableOpacity
                  style={styles.btnNotifi}
                  onPress={toggleSwitch2}
                >
                  <View
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: "row",
                      width: "100%",
                      padding: 5,
                    }}
                  >
                  <View> 
                  <Text style={styles.inputBtn}>Efeitos sonoros</Text>
                  </View>
                    <Switch
                      style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                      trackColor={{ false: "#58E09A", true: "#004444" }}
                      thumbColor={mute ? "#ACE8E8" : "#005858"}
                      onValueChange={toggleSwitch2}
                      value={mute}
                      ios_backgroundColor="#ACE8E8"
                    />
                  </View>
                </TouchableOpacity>
              </View>
    
              <View>
                <TouchableOpacity
                  style={styles.btnNotifi}
                  onPress={toggleSwitch3}
                >
                  <View
                    style={styles.containerNotifi}
                  >
                  <View> 
                  <Text style={styles.inputBtn}>Vibração</Text>
                  </View>
                    <Switch
                      style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                      trackColor={{ false: "#58E09A", true: "#004444" }}
                      thumbColor={vibracao ? "#ACE8E8" : "#005858"}
                      ios_backgroundColor="#ACE8E8"
                      onValueChange={toggleSwitch3}
                      value={vibracao}
                    />
                  </View>
                </TouchableOpacity>
              </View>
    
              <View style={{ marginBottom: 30, marginTop: 20 }}>
                <Text
                  style={styles.textPrivacidade}
                >
                  Privacidade
                </Text>
                <View>
                  <TouchableOpacity
                    style={styles.btnTermos}
                    onPress={() => {}}
                  >
                    <Text style={styles.inputBtn}>Termos de compromisso</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.btnPrivacidade}
                    onPress={() => {}}
                  >
                    <Text style={styles.inputBtn}>
                      Política de Privacidade
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          ) : (
            <ScrollView style={{marginBottom:100}}>
              <View>
                <Text
                  style={styles.title}
                >
                  Configurações
                </Text>
              </View>
              <View
                style={styles.containerAvatar}
              >
                <Image
                  style={{ width: 100, height: 100 }}
                  resizeMode="contain"
                  source={require("../../../assets/avatarConfig.png")}
                />
                <Text
                  style={styles.textAvatar}
                >
                  Mudar Avatar
                </Text>
              </View>
              <View style={{ marginBottom: 20 }}>
                <Text
                  style={styles.textSenha}
                >
                  Senha
                </Text>
                <View>
                  <TouchableOpacity
                    style={styles.btnSenha}
                    onPress={() => navigation.navigate("TrocarSenha")}
                  >
                    <Text style={styles.inputBtn}>**************</Text>
                  </TouchableOpacity>
                </View>
    
                <View>
                  <TouchableOpacity
                    style={styles.btnLogoutAndroid}
                    onPress={() => {
                      logout();
                    }}
                  >
                    <Text style={styles.inputBtn}>Sair</Text>
                  </TouchableOpacity>
                </View>
              </View>
    
              <View style={{marginLeft:20}}>
              <Text
              style={styles.textGeral}
            >
              Geral
            </Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.btnReport}
                  onPress={() => Linking.openURL(`mailto: ${email}`)}
                >
                  <Text style={styles.inputBtn}>Report bugs</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.btnNotifiAndroid}
                  onPress={toggleSwitch1}
                >
                  <View
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: "row",
                      width: "100%",
                    }}
                  >
                    <View style={{marginLeft:10}}>
                    <Text style={styles.inputBtn}>Notificações</Text>
                    </View>
                    <Switch
                      trackColor={{ false: "#005858", true: "#ACE8E8" }}
                      thumbColor={notificacao ? "#005858" : "#ACE8E8"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch1}
                      value={notificacao}
                    />
                  </View>
                </TouchableOpacity>
              </View>
    
              <View>
                <TouchableOpacity
                  style={styles.btnNotifiAndroid}
                  onPress={toggleSwitch2}
                >
                  <View
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: "row",
                      width: "100%",
                    }}
                  >
                    <View style={{marginLeft:10}}>
                    <Text style={styles.inputBtn}>Efeitos Sonoros</Text>
                    </View>
                    <Switch
                      trackColor={{ false: "#005858", true: "#ACE8E8" }}
                      thumbColor={mute ? "#005858" : "#ACE8E8"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch2}
                      value={mute}
                    />
                  </View>
                </TouchableOpacity>
              </View>
    
              <View>
                <TouchableOpacity
                  style={styles.btnNotifiAndroid}
                  onPress={toggleSwitch3}
                >
                  <View
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: "row",
                      width: "100%",
                    }}
                  >
                    <View style={{marginLeft:10}}>
                    <Text style={styles.inputBtn}>Vibração</Text>
                    </View>
                    <Switch
                      style={{}}
                      trackColor={{ false: "#005858", true: "#ACE8E8" }}
                      thumbColor={vibracao ? "#005858" : "#ACE8E8"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch3}
                      value={vibracao}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ marginBottom: 30, marginTop: 20 }}>
                <Text
                  style={styles.textSenha}
                >
                  Privacidade
                </Text>
                <View>
                  <TouchableOpacity
                    style={styles.btnTermos}
                    onPress={() => {}}
                  >
                    <Text style={styles.inputBtn}>Termos de Uso</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.btnPrivacidadeAndroid}
                    onPress={() => {}}
                  >
                    <Text style={styles.inputBtn}>
                      Política de Privacidade
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          )}
        </View>
    )
}