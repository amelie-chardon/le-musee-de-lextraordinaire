import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './components/AppButton';


export default class App extends React.Component {
    render() {
        return (
             <View style={styles.container}>
      <Text>Hello world !!!</Text>
                <StatusBar style="auto" />
                <AppButton
                    //onPress={onPress}
                    title="Connexion"
                    accessibilityLabel="Learn more about this purple button"
                />
    </View>
            
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
