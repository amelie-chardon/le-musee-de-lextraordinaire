import * as React from 'react';
import { View, Button, Text } from 'react-native';


const InscriptionScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Je suis la page Inscriptionn</Text>
        <Button
         onPress={() => navigation.navigate('Accueil')}
         title="Go back Accueil"
          />
      </View>
    );
  }

export default InscriptionScreen