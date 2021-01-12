import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './components/AppButton';
import * as Font from 'expo-font';


export default class App extends React.Component {

    //Chargement des polices
    componentDidMount = async () => {
        await Font.loadAsync({
            'BodoniModa': require('./assets/fonts/BodoniModa_6pt-Regular.ttf'),
            'LinuxLibertine': require('./assets/fonts/linlibertine_dr-webfont.ttf'),
        });
        this.setState({ loading: false })
    }

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
