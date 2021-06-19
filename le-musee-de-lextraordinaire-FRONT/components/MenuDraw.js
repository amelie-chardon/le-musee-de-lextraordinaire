
import * as React from 'react';
// import { Text, View, SafeAreaView, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { FontAwesome5 } from "@expo/vector-icons"
import HomeScreen  from './HomeScreen'
import OeuvresScreen from './OeuvresScreen'
// import AleatoireScreen from './AleatoireScreen'
import Artist from './Artiste';
import ConnexionScreen from './ConnexionScreen'
import InscriptionScreen from './InscriptionScreen'
import ProfilScreen from './ProfilScreen'
// import AdminScreen from './AdminScreen'
// import FavorisScreen from './FavorisScreen'
import ArtistePage from './ArtistePage';



    // function Burger(){
    //   return(
    //     <View style={{flexDirection:'row', height: 50}}>
    //       <View style={{flex:1, justifyContent:'center'}}>
    //         <Image style={{width:30, height:30, marginLeft:5}}
    //         source={require('./menu.png')}
    //         />
    //       </View>
    //     </View>
    //   )
    // }
  
  const Stack = createStackNavigator();
  function StackDraw() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Le Musée de l'extraordinaire" component={OngletTabs} />
      </Stack.Navigator>
      
    );
    
  }

const Tab = createBottomTabNavigator();
function OngletTabs(){
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Artistes" component={Artist} />
        <Tab.Screen name="Mouvements" component={OeuvresScreen} />
        <Tab.Screen name="Se connecter" component={ConnexionScreen} />
        <Tab.Screen name="S'inscrire" component={InscriptionScreen} />
        <Tab.Screen name="Profil" component={ProfilScreen} />
        <Tab.Screen name="Artiste" component={ArtistePage} />         
      </Tab.Navigator>
     
      
    );
  }

export default StackDraw