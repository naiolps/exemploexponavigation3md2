import React from 'react';
import{View, Text, Stylesheet, TouchableOpacity} from 'react-native';

export default function Home(navigation) {
    return(
        <View style={styles.bloco}>
            <Text style={styles.texto}>Seja Bem vindo</Text>
       <View>
       <TouchableOpacity style={styles.botao}
        onPress={()=>navigation.navigate("Mongagua")}>
            <Text style={styles.txtbotao}>Cidades</Text>
           </TouchableOpacity>
       </View>
        </View>
    );
}

const styles = Stylesheet.create({
    bloco:{
        marginTop:30
    },
    texto:{
        fontSize:30
    },
    botao:{
        marginTop:20,
        backgroundColor:'#000',
        width:'80%',
        marginLeft:'10%'
    },
    txtbotao:{
        fontSize:20,
        color:'#FFF',
        textAlign:'center'
    }
})