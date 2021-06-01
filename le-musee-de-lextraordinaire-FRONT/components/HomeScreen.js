import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { View, Button, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

const Stack = createStackNavigator();
// const Pouet = useNavigation();
const navOptionHandler =()=>({
  headerShow:false
})

function HomeStack(){
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>
  </Stack.Navigator>
}

function Burger(navigation){
  return(
    <View style={{flexDirection:'row', height: 50}}>
      <View style={{flex:1, justifyContent:'center'}}>
        <TouchableOpacity onPress = {()=> navigation.openDrawer()}>
        <Image style={{width:30, height:30, marginLeft:5}}
        source={require('./menu.png')}
        />
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

 const HomeScreen = ({ navigation }) =>{
   
    return (
      <View style={{flex: 1}}>
            <Text style={{flex:1,textAlign:'center', justifyContent:'center'}}> Bienvenue sur la page d'acceuil ! </Text>
        <View style={{flex : 10, alignItems: 'center', justifyContent: 'center'}}>
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
        <View style={{flex: 1 ,flexDirection: "row", justifyContent: 'space-around' }}>
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
      elevation: 3,
      backgroundColor: "#ECDABA",
      marginBottom: 20
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
  export default HomeScreen