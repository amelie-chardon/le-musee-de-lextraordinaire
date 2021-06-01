import * as React from 'react';
import { View, Button, Text } from 'react-native';


const AleatoireScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Je suis la page Aleatoire</Text>
        <Button onPress={() => navigation.goBack()} title="Go back Accueil" />
      </View>
    );
  }

export default AleatoireScreen