import React from "react";
import { View, Text, Image } from "react-native";
import { Surface } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import theme from "../../theme";

export const AppHeader2 = ({ nomeProfessor = "" }) => {
  const navigation = useNavigation();

  return (
    <Surface style={styles.header}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight:10
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ marginLeft: 15 }}>
            <AntDesign
              name="arrowleft"
              size={25}
              color="#fff"
              style={{ alignItems: "center" }}
              onPress={() => navigation.goBack()}
            />
          </View>

          <View style={{ marginLeft: 10, alignItems:'center' }}>
            {nomeProfessor === "" ? (
              <Image
                style={{ width: 120 }}
                resizeMode="contain"
                source={require("../../../assets/logo.png")}
              />
            ) : (
              <Text style={{fontSize:18, color:'white', fontFamily:theme.FONT_FAMILY.MEDIUM}}>{nomeProfessor}</Text>
            )}
          </View>
        </View>

        <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
          <View style={{ marginHorizontal: 20 }}>
            <MaterialIcons
              name="notifications-none"
              size={25}
              color="#fff"
              style={{ alignItems: "center" }}
            />
          </View>

          <View>
            <MaterialIcons
              name="person"
              size={25}
              color="#fff"
              onPress={() => navigation.navigate("Perfil")}
            />
          </View>
        </View>
      </View>
    </Surface>
  );
};


