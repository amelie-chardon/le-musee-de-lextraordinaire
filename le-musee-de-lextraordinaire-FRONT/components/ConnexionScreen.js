import * as React from 'react';
import { View, Button, Text } from 'react-native';
import LoginForm from './LoginForm';


const ConnexionScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LoginForm/>
      </View>
    );
  }

export default ConnexionScreen