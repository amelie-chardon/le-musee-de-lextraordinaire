import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { View, Button, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';



 const HomeScreen = ({ navigation }) =>{
   
    return (
      <View style={{flex:1,backgroundColor: "#054A61"}}>
          <View style={{flexDirection: "row", justifyContent: 'space-between',  marginTop:50, alignItems:'center', borderColor:'#fff',borderWidth: 5, shadowColor: "black"}}>
            <Image source = {require('../assets/img/cat.jpg')} style={{width:200, height:150, borderColor:'#fff',borderWidth: 5}}></Image>
            <Text style={{color:'#FFF', fontSize:40,margin:'auto'}}> Accueil </Text>
          </View>

            <Text style={{textAlign:'center', justifyContent:'center', color:'#FFF', fontSize:25}}> Bienvenue sur la page d'accueil</Text>
          
        <View style={{flex : 2, alignItems: 'center', justifyContent: 'center'}}>
          {/* <Burger  title="home" navigation={navigation}/> */}
      
          <Pressable
            style={m.button}
            title="Mouvements"
            onPress={() => navigation.navigate("Mouvements")}
          >
            <Text style={m.text}>Mouvements</Text>
          </Pressable>
          <Pressable
            style={m.button}
            title="Artistes"
            onPress={() => navigation.navigate("Artistes")}
          >
            <Text style={m.text}>Artistes</Text>
          </Pressable>
          <Pressable
            style={m.button}
            title="Aleatoire"
            onPress={() => navigation.navigate("Aleatoire")}
          >
            <Text style={m.text}>Aleatoire</Text>
          </Pressable>
          {/* <Button
            title="Aleatoire"
            onPress={() => navigation.navigate("Aleatoire")}
          /> */}
        </View>
        <View style={{flexDirection: "row", justifyContent: 'space-around' }}>
          <Pressable
            style={m.button}
            title="Inscription"
            onPress={() => navigation.navigate("S'inscrire")}
          >
            <Text style={m.text}>Inscription</Text>
          </Pressable>
          <Pressable
            style={m.button}
            title="Connexion"
            onPress={() => navigation.navigate("Se connecter")}
          >
            <Text style={m.text}>Connexion</Text>
          </Pressable>
        </View>
        

      </View>

      
    );
  }

  const m = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      // elevation: 3,
      backgroundColor: "#ECDABA",
      marginBottom: 20
    },
    text: {
      fontSize: 20,
        color: "#054A61",
        alignSelf: "center"
    },
  });
  export default HomeScreen