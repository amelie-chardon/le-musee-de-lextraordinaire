import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MouvementScreen from './OeuvresScreen'
import AleatoireScreen from './AleatoireScreen'
import Artist from './Artiste';
import InscriptionScreen from './InscriptionScreen';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackOnglet() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Le musée de l'extraordinaire" component={Onglet} />
      </Stack.Navigator>
      
    );
  }
function Onglet () {
    return (
    
      <Tab.Navigator>
        {/* <Tab.Screen name="Aleatoire" component={AleatoireScreen} /> */}
        <Tab.Screen name="Artistes" component={Artist} />
        <Tab.Screen name="Mouvements" component={Mouvement} />
        <Tab.Screen name="S'inscrire" component={InscriptionScreen} />
        <Tab.Screen name="Connexion" component={ConnexionScreen} />
        <Tab.Screen name="Profil" component={ProfilScreen} />
        
      </Tab.Navigator>
     
      
    );
  }

  export default StackOnglet

