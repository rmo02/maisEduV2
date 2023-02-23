import React from 'react';
import { View, Image} from 'react-native';
import { Surface } from "react-native-paper";
import  Icon2  from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles";

export const AppHeader = () => {
    // const navigation = useNavigation();
    return (
        <Surface style={styles.header}>
            <View style={styles.boxLogo}>
                <Image style={styles.logo} resizeMode='contain' source={require('../../../assets/logo.png')} />
            </View>
            <View style={styles.icon}> 
                <View style={{ width: 50}}>
                    <Icon2
                    name='notifications-none'
                    size={25}
                    color='#fff'
                    style={{ alignItems: "center",marginRight:25}}
                    />
                </View>
                <Icon2
                    name='person'
                    size={25}
                    color='#fff'
                    // onPress={() => navigation.navigate("Perfil")}
                />
            </View>
        </Surface>
    );
}

