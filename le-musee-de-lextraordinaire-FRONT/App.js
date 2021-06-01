import { View, StyleSheet,Container,Headers, Right, Button} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MenuDraw from './components/MenuDraw'









const App=()=> {
        return (
         

            <NavigationContainer>
           <MenuDraw/>
           </NavigationContainer>
           
        );
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#054A61',
          alignItems: 'center',
              justifyContent: 'center',
          padding:10,
        },
      });
export default App 


 




 

