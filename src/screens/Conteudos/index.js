import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import api from "../../api/api";
import { AppHeader2 } from "../../components/AppHeader2";
import { AuthContext } from "../../context/AuthContext";
import { styles } from "./styles";

export function Conteudos({route}) {
    const { userInfo } = useContext(AuthContext)
    const [ conteudos, setConteudos ] = useState([])
    const [ titulo, setTitulo ] = useState("")
    const navigation = useNavigation();
    let id = route.params.id;

    //get nos conteudos do alunos po rmateria
     useEffect(() => {
         api.get(`/conteudosAluno/${userInfo.user.id}/${id}`)
         .then(res=>{
             // s
             setConteudos(res.data['conteudo'].conteudo);
             setTitulo(res.data['conteudo'].disciplina_name);
         })
        
       }, [])


    return (
        <View style={styles.Container}>
            <AppHeader2 />
            <View style={{marginBottom:20}}>                
                <Text style={styles.text}> {titulo} </Text>
            </View>
             <ScrollView>
        <View style={{alignItems:'center', elevation:3}}>
        {conteudos.map((cont)=>(
            <TouchableOpacity
            key={cont.id}
            style={styles.container2}
            onPress={() => navigation.navigate('VideoAulas', {id: `${cont.id}`})}
            >
                <View
                key={cont.id}
                style={{alignItems:"center"}}>
                    <Text style={styles.text1}> {cont.name}</Text>
                </View>
            </TouchableOpacity> 
            ))}
            </View>
        </ScrollView>
        </View>
    )
}