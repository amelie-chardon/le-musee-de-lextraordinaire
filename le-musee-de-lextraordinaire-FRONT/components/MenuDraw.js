
import * as React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5 } from "@expo/vector-icons"
import HomeScreen  from './HomeScreen'
import MouvementScreen from './MouvementScreen'
import AleatoireScreen from './AleatoireScreen'
import Artist from './Artiste';
import ConnexionScreen from './ConnexionScreen'
import InscriptionScreen from './InscriptionScreen'




    function Burger(){
      return(
        <View style={{flexDirection:'row', height: 50}}>
          <View style={{flex:1, justifyContent:'center'}}>
            <Image style={{width:30, height:30, marginLeft:5}}
            source={require('./menu.png')}
            />
          </View>
        </View>
      )
    }

    const Drawer = createDrawerNavigator(); 
    function Draw() { 
      return (
        
        <Drawer.Navigator initialRouteName="Accueil">
            <Drawer.Screen name="Accueil" component={HomeScreen} />
            <Drawer.Screen name="Artiste" component={Artist} />
            <Drawer.Screen name="Mouvement" component={MouvementScreen} />
            <Drawer.Screen name="Aleatoire" component={AleatoireScreen} />
            <Drawer.Screen name="Se connecter" component={ConnexionScreen} />
            <Drawer.Screen name="S'inscrire" component={InscriptionScreen} />


            {/* Ici exemple de comment faire pop un onglet */}
            {/* Le depop de l'onglet s'effectue au changement de page */}
            {/* A adapter sur les pages 'Artiste','Mouvement' & 'Aleatoire' */}
            <Drawer.Screen name="PopOnglet" component={OngletTabs} />
        </Drawer.Navigator>
      
      )
  }
  const Stack = createStackNavigator();
  function StackDraw() {
    return (
      <Stack.Navigator>
        {/* <Stack.Screen name="Le musée de l'extraordinaire" component={Draw} /> */}
        <Stack.Screen name="Le Musée de l'extraordinaire" component={OngletTabs} />
        {/* <Stack.Screen name="Mr" component={Burger}/> */}
        {/* Pour mettre seulement les onglets */}
      </Stack.Navigator>
      
    );
    
  }

const Tab = createBottomTabNavigator();
function OngletTabs(){
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Aleatoire" component={AleatoireScreen} />
        <Tab.Screen name="Artistes" component={Artist} />
        <Tab.Screen name="Mouvements" component={MouvementScreen} />
        <Tab.Screen name="Se connecter" component={ConnexionScreen} />
        <Tab.Screen name="S'inscrire" component={InscriptionScreen} />
      </Tab.Navigator>
     
      
    );
  }

export default StackDraw