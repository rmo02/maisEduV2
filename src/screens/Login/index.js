import { View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform } from "react-native";
import { styles } from "./style";
import React, { useContext, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from "../../context/AuthContext";

export function Login () {
    const [mat, setMat] = useState(null);
    const [password, setPassword] = useState(null);
    const { isLoading, login, } = useContext(AuthContext);

    const onSubmit = (mat, password ) => {
      login(mat,password)
    };

    return (
        <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ height: "100%", width: "100%", backgroundColor: "red" }}
        >
          
          <View style={styles.container}>
              <Spinner visible={isLoading}/>
            <View style={styles.wrapper}>
              <Image
                resizeMode="contain"
                source={require("../../../assets/logo-educacao.png")}
                style={styles.image}
              />
              <TextInput
              keyboardType="decimal-pad"
              style={styles.Input}
              value={mat}
              placeholder="Enter Matrícula"
              onChangeText={text => setMat(text)}
            />
    
            <TextInput
              style={styles.Input}
              value={password}
              placeholder="Enter password"
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
            </View>
            <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onSubmit(mat, password);
            }}
          >
            <Text style={styles.text}>ENTRAR</Text>
          </TouchableOpacity>
            <View style={styles.footer}>
              <Text></Text>
              <TouchableOpacity>
                <Text style={styles.smallText}>Esqueci minha senha</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView> 
    )
}